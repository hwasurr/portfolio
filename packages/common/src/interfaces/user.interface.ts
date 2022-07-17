export interface ICreateUserDto {
  loginId: string;
  password: string;
  nickname?: string;
  avatar?: string;
}

export type IUpdateUserDto = Partial<Omit<ICreateUserDto, 'loginId'>>;
