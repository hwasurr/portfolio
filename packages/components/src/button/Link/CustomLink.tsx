import { css, Interpolation, useTheme } from '@emotion/react';
import { ITheme } from '@my/style';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface CustomLinkProps extends LinkProps {
  sx?: Interpolation<ITheme>;
  isExternal?: boolean;
}
export function CustomLink({
  sx,
  color,
  to,
  isExternal,
  ...rest
}: CustomLinkProps): JSX.Element {
  const theme = useTheme();
  const customLinkCss = css({
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    ':hover,:active,:focus': {
      color: theme.palette[color]?.light || theme.palette.primary.light,
    },
  });

  if (typeof to === 'string' && to.includes('https://')) {
    const handleExternalLink =
      (link: string) =>
      (e: React.MouseEvent): void => {
        e.preventDefault();
        window.open(link);
      };

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        href={isExternal ? '#' : to}
        css={[customLinkCss, sx]}
        onClick={handleExternalLink(to)}
        {...rest}
      >
        {rest.children}
      </a>
    );
  }
  return <Link to={to} css={[customLinkCss, sx]} {...rest} />;
}

export default CustomLink;
