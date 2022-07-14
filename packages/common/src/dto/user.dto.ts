import { Field, InputType, Int, OmitType, PartialType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserDto {
  @IsString() @Field() loginId: string;
  @IsString() @Field() password: string;
  @IsOptional() @IsString() @Field({ nullable: true }) nickname?: string;
  @IsOptional() @IsString() @Field({ nullable: true }) avatar?: string;
}

@InputType()
export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['loginId'])) {
  @IsNumber() @Field(() => Int) id: number;
}
