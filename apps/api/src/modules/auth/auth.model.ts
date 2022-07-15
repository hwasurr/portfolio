import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { LoginRes, UserProfile } from '../../interfaces/auth.profile';
import { Role } from '../database/base.entity';

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
  @Field(() => Role, { defaultValue: Role.GUEST }) role: Role;
}
