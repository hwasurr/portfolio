import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateCommentDto {
  @IsNumber() @Field(() => Int) gameId: number;
  @IsString() @Field() title: string;
  @IsString() @Field() contents: string;
}

@InputType()
export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @IsNumber() @Field(() => Int) id: number;
}

@InputType()
export class CreateSubCommentDto extends CreateCommentDto {
  @IsNumber() @Field(() => Int) commentId: number;
}

@InputType()
export class UpdateSubCommentDto extends PartialType(CreateSubCommentDto) {
  @IsNumber() @Field(() => Int) id: number;
}
