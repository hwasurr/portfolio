import { useTheme } from '@emotion/react';
import { CustomLink, Heading } from '@my/components';

export function Logo(): JSX.Element {
  const theme = useTheme();
  return (
    <CustomLink to="/">
      <Heading.H4 sx={{ userSelect: 'none' }}>
        파<span style={{ color: theme.palette.primary.medium }}>빙</span>: 破
        <span style={{ color: theme.palette.primary.medium }}>氷</span>
      </Heading.H4>
    </CustomLink>
  );
}

export default Logo;
