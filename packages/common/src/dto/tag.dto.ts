import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateTagDto {
  @IsString() @Field() title: string;
  @IsString() @Field() color: string;
  @IsString() @Field() description: string;
}

@InputType()
export class UpdateTagDto extends PartialType(CreateTagDto) {
  @IsNumber() @Field(() => Int) id: number;
}
