import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const apiBaseUrl = configService.get<string>("API_BASE_URL", "http://localhost:3001");
  const apiPort = configService.get<number>("API_PORT", 3001);
  const apiPrefix = configService.get<string>("API_PREFIX", "api");
  const apiDocsPath = configService.get<string>("API_DOCS_PATH", "docs");

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
}

bootstrap().catch((error) => {
  console.error("Error during application startup:", error);
});
