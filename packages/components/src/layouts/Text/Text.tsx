import { css, Interpolation, useTheme } from '@emotion/react';
import { IFontSizeKey, IFontWeightKey, IPaletteColors, ITheme } from '@my/style';
import type { Property } from 'csstype';
import { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
  color?: IPaletteColors;
  fontSize?: IFontSizeKey;
  fontWeight?: IFontWeightKey;
  lineHeight?: Property.LineHeight;
  letterSpacing?: Property.LetterSpacing;
  wordbreak?: Property.WordBreak;
  sx?: Interpolation<ITheme>;
}

export function Text({
  children,
  color,
  fontSize,
  fontWeight,
  lineHeight = '1.55',
  letterSpacing = '-0.025rem',
  wordbreak,
  sx,
}: TextProps): JSX.Element {
  const theme = useTheme();
  const textCss = css`
    color: ${color ? theme.palette[color].medium : 'inherit'};
    font-size: ${fontSize ? theme.fontSize[fontSize] : 'inherit'};
    font-weight: ${fontWeight ? theme.fontWeight[fontWeight] : 'inherit'};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    word-break: ${wordbreak};
  `;
  return <p css={[textCss, sx]}>{children}</p>;
}

export default Text;
