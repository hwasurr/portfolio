import { useTheme } from '@emotion/react';
import { A, Heading } from '@my/components';

export default function Logo(): JSX.Element {
  const theme = useTheme();
  return (
    <A href="/" style={{ cursor: 'pointer' }}>
      <Heading.H4
        sx={{
          fontFamily: 'Atma',
          textShadow: `1px 1px 0px ${theme.palette.secondary.medium},
          2px 2px 0px ${theme.palette.warn.medium},
          3px 3px 0px ${theme.palette.error.medium},
          4px 4px 0px ${theme.palette.success.medium},
          5px 5px 0px ${theme.palette.primary.medium},
          6px 6px 0px ${theme.palette.info.medium},
          7px 7px 0px ${theme.palette.black.medium}`,
        }}
        color="white"
      >
        Hwasurr
      </Heading.H4>
    </A>
  );
}
