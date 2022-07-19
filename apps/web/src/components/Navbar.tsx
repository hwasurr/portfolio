/* eslint-disable no-use-before-define */
import { css, useTheme } from '@emotion/react';
import { Avatar, Box, Button, CustomLink, Text } from '@my/components';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Role, useProfileQuery, useUserQuery } from '../__generated__/graphql';
import Logo from './Logo';

export const NavbarHeight = '60px';
export function Navbar(): JSX.Element {
  const theme = useTheme();
  const navbarCss = css({
    zIndex: theme.zIndex.banner,
    backgroundColor: theme.palette.white.medium,
    borderBottom: `${theme.borderWidth.thin} solid ${theme.palette.gray.light}`,
    overflow: 'hidden',
  });
  const [{ data: profile }] = useProfileQuery();

  const navigate = useNavigate();
  const toAdminConsole = (): void => {
    navigate('/admin');
  };

  return (
    <Box.Flex
      as="header"
      height={NavbarHeight}
      top={0}
      left={0}
      position="fixed"
      width="100%"
      sx={navbarCss}
    >
      <Box.Flex
        justify="space-between"
        align="center"
        maxWidth="xl"
        width="100%"
        margin="auto"
      >
        <Box paddingX={4}>
          <Logo />
        </Box>
        <Box.Flex gap={2} paddingX={4} align="center">
          {profile?.profile.role === Role.Admin ? (
            <Button onClick={toAdminConsole}>
              <Text>관리자콘솔</Text>
            </Button>
          ) : (
            <Button>
              <Text>공유하기</Text>
            </Button>
          )}

          {profile?.profile ? (
            <NavbarUserActions userId={profile.profile.userId} />
          ) : (
            <CustomLink to="/login">
              <Button variant="ghost-outline">
                <Text>로그인</Text>
              </Button>
            </CustomLink>
          )}
        </Box.Flex>
      </Box.Flex>
    </Box.Flex>
  );
}

export default Navbar;

interface NavbarUserActionsProps {
  userId?: number;
}
function NavbarUserActions({ userId }: NavbarUserActionsProps): JSX.Element {
  const [{ data: user }] = useUserQuery({
    pause: !userId,
    variables: { userId },
  });

  const loginLink = useMemo(
    () => (
      <CustomLink to="/login">
        <Button variant="ghost-outline">
          <Text>로그인</Text>
        </Button>
      </CustomLink>
    ),
    [],
  );

  if (!user) return loginLink;
  return (
    <Box.Flex gap={2}>
      <CustomLink to="/mypage">
        <Box position="relative">
          <Avatar emoji={user.user?.avatar || undefined} />
        </Box>
      </CustomLink>
    </Box.Flex>
  );
}
