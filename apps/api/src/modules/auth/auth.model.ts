import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role } from '@my/common';
import { LoginRes, UserProfile } from '../../interfaces/auth.profile';

@ObjectType()
export class Login implements LoginRes {
  @Field() accessToken: string;
}

// Make "Role" as GraphQL Enum "Role"
registerEnumType(Role, { name: 'Role' });

@ObjectType()
export class Me implements UserProfile {
  @Field() sub: string;
  @Field() loginId: string;
  @Field(() => Int) userId: number;
  @Field(() => Role, { defaultValue: Role.GUEST }) role: Role;
}
