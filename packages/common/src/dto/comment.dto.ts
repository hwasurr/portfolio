import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateCommentDto {
  @IsString() @Field() title: string;
  @IsString() @Field() conetnts: string;
}

@InputType()
export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @IsNumber() @Field() id: number;
}

@InputType()
export class CreateSubCommentDto extends CreateCommentDto {
  @IsNumber() @Field() commentId: number;
}

@InputType()
export class UpdateSubCommentDto extends PartialType(CreateSubCommentDto) {
  @IsNumber() @Field() id: number;
}
