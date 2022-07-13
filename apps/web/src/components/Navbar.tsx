import { css, useTheme } from '@emotion/react';
import { Box, Button, Text } from '@my/components';
import Logo from './Logo';

export const NavbarHeight = '60px';
export function Navbar(): JSX.Element {
  const theme = useTheme();
  const navbarCss = css({
    backgroundColor: theme.palette.white.medium,
    borderBottom: `${theme.borderWidth.thin} solid ${theme.palette.gray.light}`,
  });
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
          <Button>
            <Text>공유하기</Text>
          </Button>
          <Button variant="ghost-outline">
            <Text>로그인</Text>
          </Button>
        </Box.Flex>
      </Box.Flex>
    </Box.Flex>
  );
}

export default Navbar;
