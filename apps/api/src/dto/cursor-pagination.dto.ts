import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { IPaginationDto } from '@my/common';

@InputType()
export class PaginationDto implements IPaginationDto {
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
