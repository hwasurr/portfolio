import { TokenManager } from '../utils/token-manager/tokenManager';

type LogoutFn = () => void;
export const useLogout = (): LogoutFn => {
  const logout = (): void => {
    TokenManager.removeAccessToken();
    document.location.href = '/';
  };
  return logout;
};

export default useLogout;
