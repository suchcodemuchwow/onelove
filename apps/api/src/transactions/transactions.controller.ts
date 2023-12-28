import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseInterceptors,
} from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import type {
  CreateTransactionResponse} from "./dto/create-transaction.dto";
import {
  CreateTransactionDto
} from "./dto/create-transaction.dto";
import { CacheInterceptor } from "@nestjs/cache-manager";

@UseInterceptors(CacheInterceptor)
@Controller("transactions")
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  asycreate(
    @Body() createTransactionDto: CreateTransactionDto
  ): Promise<CreateTransactionResponse> {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(":transaction_id")
  findOne(
    @Param("transaction_id", new ParseUUIDPipe({ version: "4" })) id: string
  ) {
    console.log(id);
    return this.transactionsService.findOne();
  }
}
