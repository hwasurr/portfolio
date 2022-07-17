import { Site, StandingStyle } from '../enum/enums';
import { IUpdateTagDto } from './tag.interface';

export interface ICreateGameInformationDto {
  howToPlay: string;

  benefit?: string;

  availableSite?: Site;

  standingStyle?: StandingStyle;

  minNumberOfPeople: number;
  maxNumberOfPeople: number;
  minMinuteTaken: number;
  maxMinuteTaken: number;
}

export interface ICreateGameImageDto {
  id?: number;
  gameId?: number;
  name: string;
  src: string;
}

export interface ICreateGameDto {
  title: string;
  titleEmoji: string;
  gamename: string;
  summary: string;
  tagIds: number[];
  images: ICreateGameImageDto[];
  information: ICreateGameInformationDto;
}

export type IUpdateGameImageDto = ICreateGameImageDto;

export interface IUpdateGameDto
  extends Partial<Omit<ICreateGameDto, 'gamename' | 'images' | 'tagIds'>> {
  id: number;

  images: IUpdateGameImageDto[];

  tags: IUpdateTagDto[];
}

export interface IAddOrRemoveGameTagDto {
  gameId: number;
  tagId: number;
}

export type IAddGameReactionDto = IAddOrRemoveGameTagDto;
