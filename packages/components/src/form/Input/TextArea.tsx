import { css, Interpolation, useTheme } from '@emotion/react';
import { IBorderRadiusKey, IBorderWidthKey, IFontSizeKey, ITheme } from '@my/style';
import type { Property } from 'csstype';
import { forwardRef, HTMLProps } from 'react';

type HTMLTextAreaProps = Omit<HTMLProps<HTMLTextAreaElement>, 'size'>;
type TextAreaSize = 'sm' | 'md' | 'lg';
export interface TextAreaProps extends HTMLTextAreaProps {
  rounded?: IBorderRadiusKey;
  borderWidth?: IBorderWidthKey;
  size?: TextAreaSize;
  fontSize?: IFontSizeKey;
  maxHeight?: Property.MaxHeight;
  fullWidth?: boolean;
  resizable?: boolean;
  isError?: boolean;
  sx?: Interpolation<ITheme>;
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  {
    rounded = 'md',
    borderWidth = 'thin',
    size = 'md',
    fontSize,
    maxHeight = 200,
    resizable = false,
    fullWidth = false,
    isError = false,
    sx,
    ...props
  },
  ref,
): JSX.Element {
  const theme = useTheme();
  const textareaCss = css({
    borderRadius: theme.borderRadius[rounded],
    borderWidth: theme.borderWidth[borderWidth],
    borderColor: theme.palette.gray.medium,
    display: 'block',
    maxHeight,
    minWidth: '0px',
    width: fullWidth ? '100%' : undefined,
    resize: !resizable ? 'none' : undefined,
    fontSize,
  });

  const errorCss = css({ borderColor: theme.palette.error.medium });

  const sizeCss: Record<TextAreaSize, Interpolation<ITheme>> = {
    sm: css({ fontSize: theme.fontSize.sm, padding: theme.spacing[1.5] }),
    md: css({ fontSize: theme.fontSize.md, padding: theme.spacing[2] }),
    lg: css({ fontSize: theme.fontSize.lg, padding: theme.spacing[3] }),
  };
  return (
    <textarea
      css={[textareaCss, sizeCss[size], isError ? errorCss : undefined, sx]}
      {...props}
      ref={ref}
    />
  );
});

export default TextArea;
