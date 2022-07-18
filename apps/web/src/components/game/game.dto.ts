import {
  ICreateGameDto,
  ICreateGameImageDto,
  ICreateGameInformationDto,
  Site,
  StandingStyle,
} from '@my/common';
import { IsEnum, IsNumber, IsString, MinLength } from 'class-validator';

export class GameCreateFormDto implements ICreateGameDto {
  @MinLength(1, { message: '입력해주세요.' }) @IsString() title: string;
  @MinLength(1, { message: '입력해주세요.' }) @IsString() titleEmoji: string;
  @MinLength(1, { message: '입력해주세요.' }) @IsString() gamename: string;
  @MinLength(1, { message: '입력해주세요.' }) @IsString() summary: string;
  tagIds: number[];
  images: GameImageCreateFormDto[];
  information: GameInformationCreateFormDto;
}

class GameImageCreateFormDto implements ICreateGameImageDto {
  @IsNumber() gameId: number;
  @IsString() name: string;
  @IsString() src: string;
}

class GameInformationCreateFormDto implements ICreateGameInformationDto {
  @IsString() howToPlay: string;
  @IsString() benefit?: string;
  @IsEnum(Site) availableSite?: Site | null;
  @IsEnum(StandingStyle) standingStyle?: StandingStyle | null;
  @IsNumber() minNumberOfPeople: number;
  @IsNumber() maxNumberOfPeople: number;
  @IsNumber() minMinuteTaken: number;
  @IsNumber() maxMinuteTaken: number;
}
