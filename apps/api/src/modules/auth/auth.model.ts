import { Role } from '@my/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LoginRes, UserProfile } from '../../interfaces/auth.profile';

@ObjectType()
export class Login implements LoginRes {
  @Field() accessToken: string;
}

@ObjectType()
export class Me implements UserProfile {
  @Field() sub: string;
  @Field() loginId: string;
  @Field(() => Int) userId: number;
  @Field(() => Role, { defaultValue: Role.GUEST }) role: Role;
}
