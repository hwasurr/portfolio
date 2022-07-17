import { Box, Button, Text } from '@my/components';
import useLogout from '../../hooks/useLogout';

export function UserActions(): JSX.Element {
  const logout = useLogout();
  return (
    <Box.Flex gap={2} marginY={4}>
      <Button fullWidth variant="outline" onClick={logout}>
        <Text>로그아웃</Text>
      </Button>
      {/* // TODO: 회원탈퇴 기능 구현 */}
      <Button fullWidth variant="outline" color="error" disabled>
        <Text>회원탈퇴</Text>
      </Button>
    </Box.Flex>
  );
}

export default UserActions;
