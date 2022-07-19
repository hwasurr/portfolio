import { useTheme } from '@emotion/react';
import { Box, CustomLink, Heading } from '@my/components';

export function Logo(): JSX.Element {
  const theme = useTheme();
  return (
    <CustomLink to="/">
      <Box.Flex align="center" gap={2}>
        <img src="/images/logo_simple.png" height="45px" alt="logo" />
        <Heading.H4 sx={{ userSelect: 'none' }}>
          파<span style={{ color: theme.palette.primary.medium }}>빙</span>: 破
          <span style={{ color: theme.palette.primary.medium }}>氷</span>
        </Heading.H4>
      </Box.Flex>
    </CustomLink>
  );
}

export default Logo;
