import type { UserProfile } from '../interfaces/auth.profile';

declare global {
  namespace Express {
    export interface Request {
      user: User;
      // csrfToken(): string;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends UserProfile {}
  }
}
