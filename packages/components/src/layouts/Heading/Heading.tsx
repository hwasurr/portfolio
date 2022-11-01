import { css, Interpolation, SerializedStyles, useTheme } from '@emotion/react';
import { IFontSizeKey, IFontWeightKey, IPaletteColors, ITheme } from '@my/style';
import { motion, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';

export interface HeadingProps extends PropsWithChildren {
  color?: IPaletteColors;
  fontSize?: IFontSizeKey;
  fontWeight?: IFontWeightKey;
  sx?: Interpolation<ITheme>;
  motionProps?: MotionProps;
}
const useHeadingCSS = ({
  color,
  fontSize,
  fontWeight,
}: HeadingProps): SerializedStyles => {
  const theme = useTheme();
  return css({
    color: color ? theme.palette[color].medium : 'inherit',
    fontSize: fontSize ? theme.fontSize[fontSize] : fontSize,
    fontWeight: fontWeight ? theme.fontWeight[fontWeight] : fontWeight,
    lineHeight: '1.6',
    letterSpacing: '-0.025rem',
    wordBreak: 'keep-all',
  });
};

export function H1({
  children,
  color,
  fontSize = '6xl',
  fontWeight = 'bold',
  sx,
  motionProps,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return (
    <motion.h1 css={[headingCss, sx]} {...motionProps}>
      {children}
    </motion.h1>
  );
}

export function H2({
  children,
  color,
  fontSize = '5xl',
  fontWeight = 'bold',
  sx,
  motionProps,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return (
    <motion.h2 css={[headingCss, sx]} {...motionProps}>
      {children}
    </motion.h2>
  );
}

export function H3({
  children,
  color,
  fontSize = '4xl',
  fontWeight = 'bold',
  sx,
  motionProps,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return (
    <motion.h3 css={[headingCss, sx]} {...motionProps}>
      {children}
    </motion.h3>
  );
}

export function H4({
  children,
  color,
  fontSize = '3xl',
  fontWeight = 'bold',
  sx,
  motionProps,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return (
    <motion.h4 css={[headingCss, sx]} {...motionProps}>
      {children}
    </motion.h4>
  );
}

export function H5({
  children,
  color,
  fontSize = '2xl',
  fontWeight = 'bold',
  sx,
  motionProps,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return (
    <motion.h5 css={[headingCss, sx]} {...motionProps}>
      {children}
    </motion.h5>
  );
}

export function H6({
  children,
  color,
  fontSize = 'xl',
  fontWeight = 'bold',
  sx,
  motionProps,
}: HeadingProps): JSX.Element {
  const headingCss = useHeadingCSS({ color, fontSize, fontWeight });
  return (
    <motion.h6 css={[headingCss, sx]} {...motionProps}>
      {children}
    </motion.h6>
  );
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
