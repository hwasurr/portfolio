/* eslint-disable no-nested-ternary */
import { motion, MotionProps } from 'framer-motion';
import { css, Interpolation, useTheme } from '@emotion/react';
import {
  checkBorderKey,
  checkDisplaySizeKey,
  IBorderKey,
  IBorderRadiusKey,
  IDisplaySizeKey,
  ISpacingKey,
  ITheme,
} from '@my/style';
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
  flexWrap?: CSSType.Property.FlexWrap;
  border?: IBorderKey | string;
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
  as?:
    | 'div'
    | 'section'
    | 'article'
    | 'aside'
    | 'main'
    | 'header'
    | 'footer'
    | 'span'
    | 'form'
    | 'nav';
  sx?: Interpolation<ITheme>;
  motionProps?: MotionProps;
}

const useSize = (
  wORh?: CSSType.Property.Width | IDisplaySizeKey,
): string | number | undefined => {
  const theme = useTheme();
  if (!wORh) return undefined;
  if (typeof wORh === 'string' && checkDisplaySizeKey(wORh))
    return theme.displaySize[wORh];
  return wORh;
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
  flexWrap,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  border,
  gap,
  sx,
  motionProps,
  ...rest
}: BoxProps): JSX.Element {
  const theme = useTheme();
  const boxStyle = css({
    backgroundColor: 'inherit',
    padding: padding ? theme.spacing[padding] : padding,
    paddingLeft: paddingX ? theme.spacing[paddingX] : undefined,
    paddingRight: paddingX ? theme.spacing[paddingX] : undefined,
    paddingTop: paddingY ? theme.spacing[paddingY] : undefined,
    paddingBottom: paddingY ? theme.spacing[paddingY] : undefined,
    margin: margin ? theme.spacing[margin] : margin,
    marginLeft: marginX ? theme.spacing[marginX] : undefined,
    marginRight: marginX ? theme.spacing[marginX] : undefined,
    marginTop: marginY ? theme.spacing[marginY] : undefined,
    marginBottom: marginY ? theme.spacing[marginY] : undefined,
    border: border && checkBorderKey(border) ? theme.borders[border] : border,
    borderRadius: rounded ? theme.borderRadius[rounded] : rounded,
    justifyContent: justify,
    alignItems: align,
    flexDirection: flexDir,
    flexWrap,
    width: useSize(width),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    height: useSize(height),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
    gap: gap ? theme.spacing[gap] : gap,
    ...rest,
  });
  const Cmp = motion[as];
  return (
    <Cmp id={id} css={[boxStyle, sx]} {...motionProps}>
      {children}
    </Cmp>
  );
}

export function GlassBox(props: BoxProps): JSX.Element {
  return (
    <Box
      {...props}
      sx={
        props.sx instanceof Object
          ? {
              backgroundColor: 'rgba(255,255,255,0.85)',
              color: 'rgba(0,0,0,0.85)',
              ...props.sx,
            }
          : props.sx
      }
    />
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
Box.GlassBox = GlassBox;

export default Box;
