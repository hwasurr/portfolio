export interface ICreateTagDto {
  title: string;
  color: string;
  description: string;
}

export interface IUpdateTagDto extends Partial<ICreateTagDto> {
  id: number;
}
