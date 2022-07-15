import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@ArgsType()
export class LoninArgs {
  @Length(3, 15) @IsString() @Field() loginId: string;
  @IsString() @Field() password: string;
}
