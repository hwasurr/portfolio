import { css, SerializedStyles, useTheme } from '@emotion/react';
import { IFontSizeKey, IFontWeightKey, IPaletteColors } from '@my/style';
import { PropsWithChildren } from 'react';

export interface HeadingProps extends PropsWithChildren {
  color?: IPaletteColors;
  fontSize?: IFontSizeKey;
  fontWeight?: IFontWeightKey;
}
const useHeadingCSS = ({
  color,
  fontSize,
  fontWeight,
}: HeadingProps): SerializedStyles => {
  const theme = useTheme();
  return css`
    color: ${theme.palette[color].medium};
    font-size: ${theme.fontSize[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
    line-height: 1.6;
    letter-spacing: -0.025rem;
  `;
};

export function H1({
  children,
  color = 'black',
  fontSize = '6xl',
  fontWeight = 'bold',
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h1 css={headingCss}>{children}</h1>;
}

export function H2({
  children,
  color = 'black',
  fontSize = '5xl',
  fontWeight = 'bold',
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h2 css={headingCss}>{children}</h2>;
}

export function H3({
  children,
  color = 'black',
  fontSize = '4xl',
  fontWeight = 'bold',
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h3 css={headingCss}>{children}</h3>;
}

export function H4({
  children,
  color = 'black',
  fontSize = '3xl',
  fontWeight = 'bold',
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h4 css={headingCss}>{children}</h4>;
}

export function H5({
  children,
  color = 'black',
  fontSize = '2xl',
  fontWeight = 'bold',
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h5 css={headingCss}>{children}</h5>;
}

export function H6({
  children,
  color = 'black',
  fontSize = 'xl',
  fontWeight = 'bold',
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return <h6 css={headingCss}>{children}</h6>;
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
