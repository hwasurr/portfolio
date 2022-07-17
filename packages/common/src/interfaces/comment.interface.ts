export interface ICreateCommentDto {
  gameId: number;
  title: string;
  contents: string;
}

export interface IUpdateCommentDto extends Partial<ICreateCommentDto> {
  id: number;
}

export interface ICreateSubCommentDto extends ICreateCommentDto {
  commentId: number;
}

export interface IUpdateSubCommentDto extends Partial<ICreateSubCommentDto> {
  id: number;
}
