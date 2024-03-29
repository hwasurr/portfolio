/* eslint-disable no-nested-ternary */
import { css, Interpolation, useTheme } from '@emotion/react';
import { checkPaletteColor, ITheme } from '@my/style';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface CustomLinkProps extends LinkProps {
  sx?: Interpolation<ITheme>;
  defaultColored?: boolean;
  enableUnderlineAnimation?: boolean;
}
export function CustomLink({
  sx,
  color,
  to,
  defaultColored = false,
  enableUnderlineAnimation = false,
  ...rest
}: CustomLinkProps): JSX.Element {
  const theme = useTheme();
  const customLinkCss = css({
    position: 'relative',
    textDecoration: 'none',
    color: color
      ? checkPaletteColor(color)
        ? theme.palette[color].light
        : theme.palette.primary.light
      : defaultColored
      ? theme.palette.primary.light
      : 'inherit',
    cursor: 'pointer',
    ':hover,:active,:focus': {
      color:
        color && checkPaletteColor(color)
          ? theme.palette[color]?.light
          : theme.palette.primary.light,
    },
  });

  const linkUnderlineAnimation = css({
    ':after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      left: 0,
      bottom: 0,
      backgroundColor:
        color && checkPaletteColor(color)
          ? theme.palette[color]?.light
          : theme.palette.primary.light,
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out',
    },
    ':hover:after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  });

  if (typeof to === 'string' && (to.includes('https://') || to.includes('mailto:'))) {
    const handleExternalLink =
      (link: string) =>
      (e: React.MouseEvent): void => {
        e.preventDefault();
        window.open(link);
      };

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        href={to}
        css={[
          customLinkCss,
          enableUnderlineAnimation ? linkUnderlineAnimation : undefined,
          sx,
        ]}
        onClick={handleExternalLink(to)}
        {...rest}
      >
        {rest.children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      css={[
        customLinkCss,
        enableUnderlineAnimation ? linkUnderlineAnimation : undefined,
        sx,
      ]}
      {...rest}
    />
  );
}

export default CustomLink;
