import { Role } from '@my/common';

export interface UserProfile {
  sub: string;
  userId: number;
  loginId: string;
  role?: Role; // todo: Create Role enum and use here
}

export interface LoginRes {
  accessToken: string;
  // refretshToken: string;
}
