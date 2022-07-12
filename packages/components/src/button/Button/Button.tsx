import { css, useTheme } from '@emotion/react';
import { IPaletteChromaticColors } from '@my/style';
import { PropsWithChildren, useMemo } from 'react';

export interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  size?: 'sm' | 'md' | 'lg';
  color?: IPaletteChromaticColors;
  fullWidth?: boolean;
  variant?: 'outline' | 'solid';
}
export function Button({
  children,
  size = 'md',
  color = 'primary',
  fullWidth = false,
  variant = 'solid',
  onClick,
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

  const btnCss = css({
    display: 'inline-block',
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
    transition: '0.2s background-color, 0.2s color',
    ':hover': {
      backgroundColor: theme.palette[color].dark,
      color: theme.palette.white.medium,
    },
  });
  return (
    <button
      type="button"
      css={[btnCss, variant === 'outline' ? outlineBtnCss : undefined]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
