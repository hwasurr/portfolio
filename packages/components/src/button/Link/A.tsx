import { css, Interpolation, useTheme } from '@emotion/react';
import { ITheme } from '@my/style';
import { HTMLProps } from 'react';

export interface AProps extends HTMLProps<HTMLAnchorElement> {
  sx?: Interpolation<ITheme>;
}
export function A({ sx, ...rest }: AProps): JSX.Element {
  const theme = useTheme();
  const customLinkCss = css({
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    ':hover,:active': {
      color: theme.palette.primary.medium,
    },
  });
  return (
    <a css={[customLinkCss, sx]} {...rest}>
      {rest.children}
    </a>
  );
}

export default A;
