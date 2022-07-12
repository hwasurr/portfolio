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
}

export function Text({
  children,
  color = 'black',
  fontSize = 'md',
  fontWeight = 'regular',
  lineHeight = '1.6',
  letterSpacing = '-0.025rem',
}: TextProps): JSX.Element {
  const theme = useTheme();
  const textCss = css`
    color: ${theme.palette[color].medium};
    font-size: ${theme.fontSize[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
  return <p css={textCss}>{children}</p>;
}

export default Text;
