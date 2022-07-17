import { ILoginArgs } from '@my/common';
import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@ArgsType()
export class LoninArgs implements ILoginArgs {
  @Length(3, 15) @IsString() @Field() loginId: string;
  @IsString() @Field() password: string;
}
