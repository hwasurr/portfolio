import { useTheme } from '@emotion/react';
import { Heading } from '@my/components';

export function Logo(): JSX.Element {
  const theme = useTheme();
  return (
    <Heading.H4 sx={{ userSelect: 'none' }}>
      파<span style={{ color: theme.palette.primary.medium }}>빙</span>: 破
      <span style={{ color: theme.palette.primary.medium }}>氷</span>
    </Heading.H4>
  );
}

export default Logo;
