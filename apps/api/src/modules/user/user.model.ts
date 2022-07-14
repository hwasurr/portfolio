import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { passwordExcludeMiddleware } from './user.middleware';

@ObjectType()
export class User {
  @Field(() => Int) readonly id!: number;
  @Field() loginId: string;
  // @Field({ middleware: [passwordExcludeMiddleware] }) password: string;
  @Field({ nullable: true }) nickname?: string;
  @Field({ nullable: true }) avatar?: string;

  @Field(() => Date) readonly createDate!: Date;
  @Field(() => Date) readonly updateDate!: Date;
}
