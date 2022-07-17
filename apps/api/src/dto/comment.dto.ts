import {
  ICreateCommentDto,
  ICreateSubCommentDto,
  IUpdateCommentDto,
  IUpdateSubCommentDto,
} from '@my/common';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateCommentDto implements ICreateCommentDto {
  @IsNumber() @Field(() => Int) gameId: number;
  @IsString() @Field() title: string;
  @IsString() @Field() contents: string;
}

@InputType()
export class UpdateCommentDto
  extends PartialType(CreateCommentDto)
  implements IUpdateCommentDto
{
  @IsNumber() @Field(() => Int) id: number;
}

@InputType()
export class CreateSubCommentDto
  extends CreateCommentDto
  implements ICreateSubCommentDto
{
  @IsNumber() @Field(() => Int) commentId: number;
}

@InputType()
export class UpdateSubCommentDto
  extends PartialType(CreateSubCommentDto)
  implements IUpdateSubCommentDto
{
  @IsNumber() @Field(() => Int) id: number;
}
