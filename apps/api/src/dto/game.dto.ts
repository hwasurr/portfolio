/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  IAddGameReactionDto,
  IAddOrRemoveGameTagDto,
  ICreateGameDto,
  ICreateGameImageDto,
  ICreateGameInformationDto,
  IUpdateGameDto,
  IUpdateGameImageDto,
  Role,
  Site,
  StandingStyle,
} from '@my/common';
import {
  ArgsType,
  Field,
  InputType,
  Int,
  OmitType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { UpdateTagDto } from './tag.dto';

registerEnumType(Site, { name: 'Site' });
registerEnumType(StandingStyle, { name: 'StandingStyle' });
registerEnumType(Role, { name: 'Role' });

@InputType()
export class CreateGameInformationDto implements ICreateGameInformationDto {
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
export class CreateGameImageDto implements ICreateGameImageDto {
  @IsOptional() @IsNumber() @Field(() => Int, { nullable: true }) id?: number;
  @IsOptional() @IsNumber() @Field(() => Int, { nullable: true }) gameId?: number;
  @Field() @IsString() name: string;
  @Field() @IsString() src: string;
}

@InputType()
export class CreateGameDto implements ICreateGameDto {
  @Field() @IsString() title: string;
  @Field() @IsString() titleEmoji: string;
  @Field() @IsString() gamename: string;
  @Field() @IsString() summary: string;
  @Field(() => [Int]) @IsNumber({}, { each: true }) tagIds: number[];

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
export class UpdateGameImageDto
  extends CreateGameImageDto
  implements IUpdateGameImageDto {}

@InputType()
export class UpdateGameDto
  extends PartialType(OmitType(CreateGameDto, ['gamename', 'images', 'tagIds']))
  implements IUpdateGameDto
{
  @IsNumber() @Field(() => Int) id: number;

  @Field(() => [UpdateGameImageDto])
  @Type(() => UpdateGameImageDto)
  @ValidateNested({ each: true })
  images: UpdateGameImageDto[];

  @Field(() => [UpdateTagDto])
  @Type(() => UpdateTagDto)
  @ValidateNested({ each: true })
  tags: UpdateTagDto[];
}

@ArgsType()
export class AddOrRemoveGameTagDto implements IAddOrRemoveGameTagDto {
  @Field(() => Int) @IsNumber() gameId: number;
  @Field(() => Int) @IsNumber() tagId: number;
}

@ArgsType()
export class AddGameReactionDto
  extends AddOrRemoveGameTagDto
  implements IAddGameReactionDto {}
