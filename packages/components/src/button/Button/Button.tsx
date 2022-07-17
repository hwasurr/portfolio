import { css, Interpolation, useTheme } from '@emotion/react';
import { IPaletteChromaticColors, ITheme } from '@my/style';
import { HTMLProps, useMemo } from 'react';
import { Text } from '../../layouts/Text/Text';

type HTMLButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size'>;
export interface ButtonProps extends HTMLButtonProps {
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  size?: 'sm' | 'md' | 'lg';
  color?: IPaletteChromaticColors;
  fullWidth?: boolean;
  variant?: 'outline' | 'solid' | 'ghost-outline';
  isLoading?: boolean;
  loadingMessage?: string;
  sx?: Interpolation<ITheme>;
}
export function Button({
  children,
  size = 'md',
  color = 'primary',
  fullWidth = false,
  variant = 'solid',
  isLoading = false,
  sx,
  onClick,
  loadingMessage = '로딩중..',
  ...props
}: ButtonProps): JSX.Element {
  const theme = useTheme();
  const realSize = useMemo((): string => {
    if (size === 'sm') return theme.spacing[1.5];
    if (size === 'lg') return theme.spacing[3];
    return theme.spacing[2];
  }, [size, theme.spacing]);

  const outlineBtnCss = css({
    background: 'transparent',
    border: `1px solid ${theme.palette[color].medium}`,
    color: theme.palette.black.medium,
  });

  const outlineGhostBtnCss = css({
    background: 'transparent',
    color: theme.palette.black.medium,
    ':hover:not(:disabled)': {
      border: `1px solid ${theme.palette[color].medium}`,
      color: theme.palette.black.medium,
      backgroundColor: `${theme.palette[color].light}30`, // 30 means transparent
    },
  });

  const btnCss = css({
    display: fullWidth ? 'block' : 'inline-block',
    cursor: 'pointer',
    width: fullWidth ? '100%' : undefined,
    lineHeight: 1,
    padding: realSize,
    userSelect: 'none',
    textDecoration: 'none',
    background: theme.palette[color].medium,
    border: '1px solid transparent',
    borderRadius: theme.borderRadius.lg,
    color: theme.palette.white.medium,
    fontWeight: theme.fontWeight.semiBold,
    transition: '0.3s background-color, 0.2s color, 0.1s transform',
    ':hover:not(:disabled)': {
      backgroundColor: theme.palette[color].dark,
      color: theme.palette.white.medium,
    },
    ':active:not(:disabled)': {
      transform: 'translateY(0.125rem)',
    },
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.4,
      ':hover': { backgroundColor: undefined, color: undefined },
      ':active': { transform: undefined },
    },
  });
  const loadingCss = css({
    cursor: 'not-allowed',
    opacity: 0.4,
    ':hover:disabled': { backgroundColor: undefined, color: undefined },
    ':active:disabled': { transform: undefined },
  });

  return (
    <button
      type="button"
      css={[
        btnCss,
        isLoading ? loadingCss : undefined,
        variant === 'outline' ? outlineBtnCss : undefined,
        variant === 'ghost-outline' ? outlineGhostBtnCss : undefined,
        sx,
      ]}
      onClick={onClick}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <Text>{loadingMessage}</Text> : children}
    </button>
  );
}

export default Button;
