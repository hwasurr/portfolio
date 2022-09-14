import { css, Interpolation, useTheme } from '@emotion/react';
import { ITheme } from '@my/style';
import { Link, LinkProps } from 'react-router-dom';

export interface CustomLinkProps extends LinkProps {
  sx?: Interpolation<ITheme>;
}
export function CustomLink({ sx, color, ...rest }: CustomLinkProps): JSX.Element {
  const theme = useTheme();
  const customLinkCss = css({
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    ':hover,:active,:focus': {
      color: theme.palette[color]?.medium || theme.palette.primary.medium,
    },
  });
  return <Link css={[customLinkCss, sx]} {...rest} />;
}

export default CustomLink;
