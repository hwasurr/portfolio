import { css, useTheme } from '@emotion/react';
import { IPaletteChromaticColors } from '@my/style';
import { PropsWithChildren } from 'react';
import Text from '../../layouts/Text/Text';

export interface BadgeProps extends PropsWithChildren {
  color?: IPaletteChromaticColors | string;
  /** color prop is ignored when randomColorMode is enabled */
  randomColorMode?: boolean;
}
export function Badge({ children, color = 'primary' }: BadgeProps): JSX.Element {
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
  return (
    <div css={badgeCss}>
      <Text>{children}</Text>
    </div>
  );
}

export default Badge;
