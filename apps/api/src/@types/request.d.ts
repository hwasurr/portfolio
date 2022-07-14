declare global {
  namespace Express {
    export interface Request {
      user: User;
      // csrfToken(): string;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User {
      userId: string;
      loginId: string;
    }
  }
}
