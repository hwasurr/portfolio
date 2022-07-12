import { css, useTheme } from '@emotion/react';
import { IFontSizeKey, IFontWeightKey, IPaletteColors } from '@my/style';
import type { Property } from 'csstype';
import { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
  color?: IPaletteColors;
  fontSize?: IFontSizeKey;
  fontWeight?: IFontWeightKey;
  lineHeight?: Property.LineHeight;
  letterSpacing?: Property.LetterSpacing;
  wordbreak?: Property.WordBreak;
}

export function Text({
  children,
  color,
  fontSize,
  fontWeight = 'regular',
  lineHeight = '1.5',
  letterSpacing = '-0.025rem',
  wordbreak,
}: TextProps): JSX.Element {
  const theme = useTheme();
  const textCss = css`
    color: ${color ? theme.palette[color].medium : 'inherit'};
    font-size: ${fontSize ? theme.fontSize[fontSize] : 'inherit'};
    font-weight: ${theme.fontWeight[fontWeight]};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    word-break: ${wordbreak};
  `;
  return <p css={textCss}>{children}</p>;
}

export default Text;
