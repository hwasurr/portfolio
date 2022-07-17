import { Box, Button, CustomLink, Text } from '@my/components';
import UserActions from '../components/auth/UserActions';
import UserInfo from '../components/auth/UserInfo';
import UserMeta from '../components/auth/UserMeta';
import NavbarLayout from '../components/layouts/NavbarLayout';
import useMyProfile from '../hooks/useMyProfile';

export function Mypage(): JSX.Element {
  const [isLoggedIn, user] = useMyProfile();

  if (!isLoggedIn || !user)
    return (
      <NavbarLayout>
        <Box.Flex
          maxWidth="320px"
          margin="auto"
          flexDir="column"
          justify="center"
          height="100vh"
          textAlign="center"
          gap={2}
        >
          <Text>
            현재 로그인되어있지 않습니다. 로그인화면으로 돌아가서 로그인을 진행해주세요.
          </Text>
          <CustomLink to="/login">
            <Button fullWidth>
              <Text>로그인</Text>
            </Button>
          </CustomLink>
        </Box.Flex>
      </NavbarLayout>
    );

  return (
    <NavbarLayout>
      <Box.Flex
        height="inherit"
        justify="center"
        flexDir="column"
        maxWidth="320px"
        margin="auto"
        marginY={6}
        gap={2}
      >
        <UserMeta user={user} />
        <UserInfo user={user} />
        <UserActions />
      </Box.Flex>
    </NavbarLayout>
  );
}

export default Mypage;
