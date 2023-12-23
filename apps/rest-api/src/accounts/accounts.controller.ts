import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get(':account_id')
  findOne(
    @Param('account_id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.accountsService.findOne(id);
  }
}
