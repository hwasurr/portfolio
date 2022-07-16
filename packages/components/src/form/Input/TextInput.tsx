import { css, Interpolation, useTheme } from '@emotion/react';
import { IBorderRadiusKey, IBorderWidthKey, IFontSizeKey, ITheme } from '@my/style';
import { forwardRef, HTMLProps } from 'react';

type HTMLInputProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type TextInputSize = 'sm' | 'md' | 'lg';
export interface TextInputProps extends HTMLInputProps {
  rounded?: IBorderRadiusKey;
  borderWidth?: IBorderWidthKey;
  size?: TextInputSize;
  fontSize?: IFontSizeKey;
  fullWidth?: boolean;
  sx?: Interpolation<ITheme>;
}
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  {
    rounded = 'md',
    borderWidth = 'thin',
    size = 'md',
    fontSize,
    fullWidth,
    sx,
    ...props
  },
  ref,
): JSX.Element {
  const theme = useTheme();
  const inputCss = css({
    borderRadius: theme.borderRadius[rounded],
    borderWidth: theme.borderWidth[borderWidth],
    fontSize,
    width: fullWidth ? '100%' : undefined,
  });

  const sizeCss: Record<TextInputSize, Interpolation<ITheme>> = {
    sm: css({ fontSize: theme.fontSize.sm, padding: theme.spacing[1.5] }),
    md: css({ fontSize: theme.fontSize.md, padding: theme.spacing[2] }),
    lg: css({ fontSize: theme.fontSize.lg, padding: theme.spacing[3] }),
  };
  return <input css={[inputCss, sizeCss[size], sx]} {...props} ref={ref} />;
});

export default TextInput;
