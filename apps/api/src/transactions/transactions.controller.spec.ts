import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { TransactionsController } from "./transactions.controller";
import { TransactionsService } from "./transactions.service";
import { CACHE_MANAGER } from "@nestjs/cache-manager";

describe("TransactionsController", () => {
  let controller: TransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        TransactionsService,
        { provide: CACHE_MANAGER, useValue: {} },
      ],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
