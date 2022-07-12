import { css, Interpolation, SerializedStyles, useTheme } from '@emotion/react';
import { IFontSizeKey, IFontWeightKey, IPaletteColors, ITheme } from '@my/style';
import { PropsWithChildren } from 'react';

export interface HeadingProps extends PropsWithChildren {
  color?: IPaletteColors;
  fontSize?: IFontSizeKey;
  fontWeight?: IFontWeightKey;
  sx?: Interpolation<ITheme>;
}
const useHeadingCSS = ({
  color,
  fontSize,
  fontWeight,
}: HeadingProps): SerializedStyles => {
  const theme = useTheme();
  return css({
    color: theme.palette[color].medium,
    fontSize: theme.fontSize[fontSize],
    fontWeight: theme.fontWeight[fontWeight],
    lineHeight: '1.6',
    letterSpacing: '-0.025rem',
    wordBreak: 'keep-all',
  });
};

export function H1({
  children,
  color = 'black',
  fontSize = '6xl',
  fontWeight = 'bold',
  sx,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h1 css={[headingCss, sx]}>{children}</h1>;
}

export function H2({
  children,
  color = 'black',
  fontSize = '5xl',
  fontWeight = 'bold',
  sx,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h2 css={[headingCss, sx]}>{children}</h2>;
}

export function H3({
  children,
  color = 'black',
  fontSize = '4xl',
  fontWeight = 'bold',
  sx,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h3 css={[headingCss, sx]}>{children}</h3>;
}

export function H4({
  children,
  color = 'black',
  fontSize = '3xl',
  fontWeight = 'bold',
  sx,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h4 css={[headingCss, sx]}>{children}</h4>;
}

export function H5({
  children,
  color = 'black',
  fontSize = '2xl',
  fontWeight = 'bold',
  sx,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h5 css={[headingCss, sx]}>{children}</h5>;
}

export function H6({
  children,
  color = 'black',
  fontSize = 'xl',
  fontWeight = 'bold',
  sx,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h6 css={[headingCss, sx]}>{children}</h6>;
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
