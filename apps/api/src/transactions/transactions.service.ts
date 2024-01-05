import { Injectable } from "@nestjs/common";

import type {
  CreateTransactionDto,
  CreateTransactionResponse,
} from "./dto/create-transaction.dto";

@Injectable()
export class TransactionsService {
  create(
    createTransactionDto: CreateTransactionDto,
  ): CreateTransactionResponse {
    return {
      account_id: createTransactionDto.account_id,
      created_at: new Date(),
      transaction_id: "1",
      amount: 100,
    };
  }

  findOne(): Promise<CreateTransactionResponse> {
    return Promise.resolve({
      account_id: "1",
      created_at: new Date(),
      transaction_id: "1",
      amount: 100,
    });
  }

  findAll(): Promise<CreateTransactionResponse[]> {
    return Promise.resolve([
      {
        account_id: "1",
        created_at: new Date(),
        transaction_id: "1",
        amount: 100,
      },
    ]);
  }
}
