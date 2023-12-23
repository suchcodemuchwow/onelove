import { Injectable } from "@nestjs/common";

@Injectable()
export class AccountsService {
  constructor() {}

  findOne(id: string) {
    return {
      id,
      balance: 1000,
      name: "Account 1",
    };
  }
}
