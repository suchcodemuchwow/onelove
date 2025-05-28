import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsUUID } from "class-validator";

export class CreateTransactionDto {
  @IsUUID("all")
  @ApiProperty({
    required: true,
    example: "cf479136-0a5b-42ad-a16c-26d9eda3b4aa",
  })
  account_id: string;

  @IsNumber()
  @ApiProperty({
    required: true,
    example: 100.5,
  })
  amount: number;
}

export class CreateTransactionResponse extends CreateTransactionDto {
  @ApiProperty({
    required: true,
    example: "cf479136-0a5b-42ad-a16c-26d9eda3b4aa",
  })
  transaction_id: string;

  @IsDate()
  created_at: Date;
}
