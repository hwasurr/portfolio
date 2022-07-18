import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GameReactionResult {
  @Field(() => Int) count: number;
  @Field() reactionEmoji: string;
  @Field(() => Boolean, { nullable: true }) reactedByMe?: boolean;
}
