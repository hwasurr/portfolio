import { css, Interpolation, useTheme } from '@emotion/react';
import { IBorderRadiusKey, IDisplaySizeKey, ISpacingKey, ITheme } from '@my/style';
import type * as CSSType from 'csstype';
import { PropsWithChildren } from 'react';

export interface BoxProps extends PropsWithChildren {
  id?: string;
  width?: CSSType.Property.Width | IDisplaySizeKey;
  minWidth?: CSSType.Property.MinWidth | IDisplaySizeKey;
  maxWidth?: CSSType.Property.MaxWidth | IDisplaySizeKey;
  height?: CSSType.Property.Height | IDisplaySizeKey;
  minHeight?: CSSType.Property.MinHeight | IDisplaySizeKey;
  maxHeight?: CSSType.Property.MaxHeight | IDisplaySizeKey;
  textAlign?: CSSType.Property.TextAlign;
  justify?: CSSType.Property.JustifyContent;
  align?: CSSType.Property.AlignItems;
  flexDir?: CSSType.Property.FlexDirection;
  border?: CSSType.Property.Border;
  display?: CSSType.Property.Display;
  position?: CSSType.Property.Position;
  top?: CSSType.Property.Top;
  left?: CSSType.Property.Left;
  right?: CSSType.Property.Right;
  bottom?: CSSType.Property.Bottom;
  padding?: ISpacingKey;
  paddingX?: ISpacingKey;
  paddingY?: ISpacingKey;
  margin?: ISpacingKey;
  marginX?: ISpacingKey;
  marginY?: ISpacingKey;
  gap?: ISpacingKey;
  rounded?: IBorderRadiusKey;
  as?: 'div' | 'section' | 'article' | 'aside' | 'main' | 'header' | 'footer' | 'span';
  sx?: Interpolation<ITheme>;
}

const useSize = (wORh: CSSType.Property.Width | IDisplaySizeKey): string => {
  const theme = useTheme();
  return typeof wORh === 'string' && Object.keys(theme.displaySize).includes(wORh)
    ? theme.displaySize[wORh]
    : wORh;
};
export function Box({
  id,
  children,
  as = 'div',
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  rounded,
  justify,
  align,
  flexDir,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  gap,
  sx,
  ...rest
}: BoxProps): JSX.Element {
  const theme = useTheme();
  const boxStyle = css({
    backgroundColor: 'inherit',
    padding: theme.spacing[padding],
    paddingLeft: paddingX ? theme.spacing[paddingX] : undefined,
    paddingRight: paddingX ? theme.spacing[paddingX] : undefined,
    paddingTop: paddingY ? theme.spacing[paddingY] : undefined,
    paddingBottom: paddingY ? theme.spacing[paddingY] : undefined,
    margin: theme.spacing[margin],
    marginLeft: marginX ? theme.spacing[marginX] : undefined,
    marginRight: marginX ? theme.spacing[marginX] : undefined,
    marginTop: marginY ? theme.spacing[marginY] : undefined,
    marginBottom: marginY ? theme.spacing[marginY] : undefined,
    borderRadius: theme.borderRadius[rounded],
    justifyContent: justify,
    alignItems: align,
    flexDirection: flexDir,
    width: useSize(width),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    height: useSize(height),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
    gap: theme.spacing[gap],
    ...rest,
  });
  const Cmp = as;
  return (
    <Cmp id={id} css={[boxStyle, sx]}>
      {children}
    </Cmp>
  );
}

export function Center(props: BoxProps): JSX.Element {
  return <Box {...props} textAlign="center" />;
}

export function Flex(props: BoxProps): JSX.Element {
  return <Box {...props} display="flex" />;
}

Box.Center = Center;
Box.Flex = Flex;

export default Box;
