import { Role } from '@my/common';

export interface UserProfile {
  sub: string;
  userId: number;
  loginId: string;
  role?: Role;
}

export interface LoginRes {
  accessToken: string;
  // refretshToken: string;
}
