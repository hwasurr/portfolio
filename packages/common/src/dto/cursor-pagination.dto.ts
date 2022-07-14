import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  skip?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  take?: number;
}
