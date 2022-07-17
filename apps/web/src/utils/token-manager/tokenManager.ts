export class TokenManager {
  static #ACCESS_TOKEN_KEY = 'AT';

  static getAccessToken(): string | null {
    return localStorage.getItem(this.#ACCESS_TOKEN_KEY);
  }

  static setAccessToken(accessToken?: string): boolean {
    if (!accessToken) return false;
    try {
      localStorage.setItem(this.#ACCESS_TOKEN_KEY, accessToken);
      return true;
    } catch {
      return false;
    }
  }

  static removeAccessToken(): void {
    localStorage.removeItem(this.#ACCESS_TOKEN_KEY);
  }
}
