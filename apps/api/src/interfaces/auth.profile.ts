export interface UserProfile {
  sub: string;
  loginId: string;
  role?: string; // todo: Create Role enum and use here
}

export interface LoginRes {
  accessToken: string;
  // refretshToken: string;
}
