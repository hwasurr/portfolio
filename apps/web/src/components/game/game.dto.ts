import 'reflect-metadata';
import {
  ICreateGameDto,
  ICreateGameImageDto,
  ICreateGameInformationDto,
  Site,
  StandingStyle,
} from '@my/common';
import {
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GameCreateFormDto implements ICreateGameDto {
  @MinLength(1, { message: '제목을 입력해주세요.' }) @IsString() title: string;
  @MinLength(1, { message: '이모지를 입력해주세요.' }) @IsString() titleEmoji: string;
  @MinLength(1, { message: '게임고유영어이름을 입력해주세요.' })
  @IsString()
  gamename: string;

  @MinLength(1, { message: '간략(3~4줄) 설명을 입력해주세요.' })
  @IsString()
  summary: string;

  @IsOptional()
  @IsNumber({}, { each: true })
  tagIds: number[];

  @Type(() => GameImageCreateFormDto)
  @ValidateNested({ each: true })
  images: GameImageCreateFormDto[];

  @Type(() => GameInformationCreateFormDto)
  @ValidateNested({ each: true })
  information: GameInformationCreateFormDto;
}

class GameImageCreateFormDto implements ICreateGameImageDto {
  @IsNumber() gameId: number;
  @IsString() name: string;
  @IsString() src: string;
}

class GameInformationCreateFormDto implements ICreateGameInformationDto {
  @MinLength(1, { message: '방법을 입력해주세요.' })
  @IsDefined({ message: '입력해주세요.' })
  @IsString({ message: '문자열로 입력해주세요.' })
  howToPlay: string;

  @IsString()
  @IsString({ message: '문자열로 입력해주세요.' })
  benefit?: string;

  @IsEnum(Site) availableSite?: Site | null;
  @IsEnum(StandingStyle) standingStyle?: StandingStyle | null;

  @IsNumber({}, { message: '숫자를 입력해주세요.' }) minNumberOfPeople: number;
  @IsNumber({}, { message: '숫자를 입력해주세요.' }) maxNumberOfPeople: number;
  @IsNumber({}, { message: '숫자를 입력해주세요.' }) minMinuteTaken: number;
  @IsNumber({}, { message: '숫자를 입력해주세요.' }) maxMinuteTaken: number;
}
