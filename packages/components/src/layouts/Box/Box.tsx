import { PropsWithChildren } from 'react';
import { css, useTheme } from '@emotion/react';

export type BoxProps = PropsWithChildren;
export function Box({ children }: BoxProps): JSX.Element {
  const boxStyle = css`
    background-color: white;
  `;
  return <div css={boxStyle}>{children}</div>;
}

export function Center({ children }: BoxProps): JSX.Element {
  const theme = useTheme();
  const boxStyle = css`
    background-color: ${theme.palette.white.dark};
    text-align: center;
  `;
  return <div css={boxStyle}>{children}</div>;
}

Box.Center = Center;

export default Box;
