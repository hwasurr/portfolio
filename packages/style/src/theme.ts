// font
export type IFontKey = 'body' | 'heading';
export type IFont = Record<IFontKey, string>;

// fontSize
export type IFontSizeKey =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type IFontSize = Record<IFontSizeKey, string>;
const fontsizes: IFontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
};

// fontWeight
export type IFontWeightKey =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

export type IFontWeight = Record<IFontWeightKey, number>;
const fontWeight: IFontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

// Display size
export type IDisplaySizeKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IDisplaySize = Record<IDisplaySizeKey, string>;
const displaySizes: IDisplaySize = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};
export type displayMediaQueryKey = Exclude<IDisplaySizeKey, '2xl'> | 'base';
export type IDisplayMediaQuery = Record<displayMediaQueryKey, string>;
export const displayMediaQueries: IDisplayMediaQuery = {
  base: `@meda (min-width: ${displaySizes.sm}`,
  sm: `@meda (min-width: ${displaySizes.md}`,
  md: `@meda (min-width: ${displaySizes.lg}`,
  lg: `@meda (min-width: ${displaySizes.xl}`,
  xl: `@meda (min-width: ${displaySizes['2xl']}`,
};

// Spacing
export type ISpacingKey =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | 'auto';

export type ISpacing = Record<ISpacingKey, string>;
const spacing: ISpacing = {
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
  auto: 'auto',
};

// Border Radius
export type IBorderRadiusKey =
  | 'none'
  | 'sm'
  | 'base'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full';
export type IBorderRadius = Record<IBorderRadiusKey, string>;
const borderRadius: IBorderRadius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Border Width
export type IBorderWidthKey = 'thin' | 'medium' | 'thick';
export type IBorderWidth = Record<IBorderWidthKey, string>;
const borderWidth: IBorderWidth = {
  thin: '0.05rem',
  medium: '0.1rem',
  thick: '0.15rem',
};

// Color Palette
export type ColorVariant = 'light' | 'medium' | 'dark';
export type IColor = Record<ColorVariant, string>;
export type IPaletteChromaticColors =
  | 'gray'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warn'
  | 'error';
export type IPaletteAchromaticColors = 'transparent' | 'black' | 'white';
export type IPaletteColors = IPaletteChromaticColors | IPaletteAchromaticColors;
export type IPalette = Record<IPaletteColors, IColor>;
export const palette: IPalette = {
  transparent: {
    light: 'transparent',
    medium: 'transparent',
    dark: 'transparent',
  },
  black: {
    light: '#000',
    medium: '#000',
    dark: '#000',
  },
  white: {
    light: '#fff',
    medium: '#fff',
    dark: '#fff',
  },
  gray: {
    light: '#F7FAFC',
    medium: '#A0AEC0',
    dark: '#1A202C',
  },
  primary: {
    light: '#B2F5EA',
    medium: '#38B2AC',
    dark: '#285E61',
  },
  secondary: {
    light: '#B2F5EA',
    medium: '#38B2AC',
    dark: '#285E61',
  },
  success: {
    light: '#68D391',
    medium: '#48BB78',
    dark: '#276749',
  },
  warn: {
    light: '#F6AD55',
    medium: '#ED8936',
    dark: '#C05621',
  },
  info: {
    light: '#BEE3F8',
    medium: '#4299E1',
    dark: '#2A4365',
  },
  error: {
    light: '#FC8181',
    medium: '#E53E3E',
    dark: '#9B2C2C',
  },
};

export interface ITheme {
  palette: IPalette;
  borderRadius: IBorderRadius;
  borderWidth: IBorderWidth;
  spacing: ISpacing;
  fonts: IFont;
  fontSize: IFontSize;
  fontWeight: IFontWeight;
  displaySize: IDisplaySize;
  displayMediaQueries: IDisplayMediaQuery;
}

export const theme: ITheme = {
  palette,
  fontWeight,
  fonts: {
    body: 'Noto Sans KR',
    heading: 'Noto Sans KR',
  },
  fontSize: fontsizes,
  borderRadius,
  borderWidth,
  displaySize: displaySizes,
  displayMediaQueries,
  spacing,
};

export default theme;
