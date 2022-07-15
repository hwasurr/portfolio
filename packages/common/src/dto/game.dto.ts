/* eslint-disable @typescript-eslint/no-use-before-define */
import { Field, InputType, Int, OmitType, PartialType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Site, StandingStyle } from '../enum/enums';

@InputType()
export class CreateGameInformationDto {
  @Field() @IsString() howToPlay: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  benefit?: string;

  @Field(() => Site, { nullable: true })
  @IsOptional()
  @IsEnum(Site)
  availableSite?: Site;

  @Field(() => StandingStyle, { nullable: true })
  @IsOptional()
  @IsEnum(StandingStyle)
  standingStyle?: StandingStyle;

  @Field(() => Int) @IsNumber() minNumberOfPeople: number;
  @Field(() => Int) @IsNumber() maxNumberOfPeople: number;
  @Field(() => Int) @IsNumber() minMinuteTaken: number;
  @Field(() => Int) @IsNumber() maxMinuteTaken: number;
}

@InputType()
export class CreateGameImageDto {
  @IsOptional() @IsNumber() @Field(() => Int, { nullable: true }) id?: number;
  @IsOptional() @IsNumber() @Field(() => Int, { nullable: true }) gameId?: number;
  @Field() @IsString() name: string;
  @Field() @IsString() src: string;
}

@InputType()
export class CreateGameDto {
  @Field() @IsString() title: string;
  @Field() @IsString() titleEmoji: string;
  @Field() @IsString() gamename: string;
  @Field() @IsString() summary: string;

  @Field(() => [CreateGameImageDto])
  @Type(() => CreateGameImageDto)
  @ValidateNested({ each: true })
  images: CreateGameImageDto[];

  @Field(() => CreateGameInformationDto)
  @Type(() => CreateGameInformationDto)
  @ValidateNested()
  information: CreateGameInformationDto;
}

@InputType()
export class UpdateGameImageDto extends CreateGameImageDto {}

@InputType()
export class UpdateGameDto extends PartialType(
  OmitType(CreateGameDto, ['gamename', 'images']),
) {
  @IsNumber() @Field(() => Int) id: number;

  @Field(() => [UpdateGameImageDto])
  @Type(() => UpdateGameImageDto)
  @ValidateNested({ each: true })
  images: UpdateGameImageDto[];
}
