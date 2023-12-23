import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigService } from "@nestjs/config";
import type { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const configService = app.get<ConfigService>(ConfigService);

    const apiBaseUrl = configService.get("API_BASE_URL", "localhost");
    const apiPort = configService.get("API_PORT", 3001);
    const apiPrefix = configService.get("API_PREFIX", "api");
    const apiDocsPath = configService.get("API_DOCS_PATH", "docs");

    app.setGlobalPrefix(apiPrefix);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({ credentials: true, origin: true });

    const swaggerConfig = new DocumentBuilder()
      .addServer(apiBaseUrl)
      .setTitle(`Accounting API`)
      .setVersion("0.0.1")
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(apiDocsPath, app, document);

    await app.listen(Number(apiPort));
  } catch (error) {
    console.error("Error during application startup:", error);
  }
}
bootstrap();
