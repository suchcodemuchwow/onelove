import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AccountsModule } from "./accounts/accounts.module";
import { PingModule } from "./ping/ping.module";
import { TransactionsModule } from "./transactions/transactions.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({ isGlobal: true, ttl: 60 * 60 * 24 }),
    PingModule,
    TransactionsModule,
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
