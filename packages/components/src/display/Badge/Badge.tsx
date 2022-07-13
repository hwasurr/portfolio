import { css, useTheme } from '@emotion/react';
import { IPaletteChromaticColors } from '@my/style';
import { PropsWithChildren } from 'react';
import Text from '../../layouts/Text/Text';

export interface BadgeProps extends PropsWithChildren {
  color?: IPaletteChromaticColors | string;
  /** color prop is ignored when randomColorMode is enabled */
  randomColorMode?: boolean;
  variant?: 'solid' | 'outline';
}
export function Badge({
  children,
  color = 'primary',
  variant = 'solid',
}: BadgeProps): JSX.Element {
  const theme = useTheme();
  const badgeCss = css({
    userSelect: 'none',
    display: 'inline-block',
    border: 'none',
    borderRadius: theme.borderRadius.xl,
    padding: `0px ${theme.spacing[3]}`,
    background: theme.palette[color]?.medium || color,
    color: theme.palette.white.medium,
    fontSize: theme.fontSize.sm,
    transition: 'background 0.2s',
  });
  const badgeOutlineCss = css({
    border: `${theme.borderWidth.thin} solid`,
    color: theme.palette[color]?.medium || color,
    borderColor: theme.palette[color]?.medium || color,
    background: 'transparent',
  });
  return (
    <div css={[badgeCss, variant === 'outline' ? badgeOutlineCss : undefined]}>
      <Text fontWeight="medium">{children}</Text>
    </div>
  );
}

export default Badge;
