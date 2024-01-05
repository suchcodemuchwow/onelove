import { Module } from "@nestjs/common";

import { AccountsController } from "./accounts.controller";
import { AccountsService } from "./accounts.service";

@Module({
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
