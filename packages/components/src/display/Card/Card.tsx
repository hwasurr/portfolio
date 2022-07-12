import { css, useTheme } from '@emotion/react';
import Box, { BoxProps } from '../../layouts/Box/Box';

export type CardProps = BoxProps;
export function Card({ children, ...rest }: BoxProps): JSX.Element {
  const theme = useTheme();
  const cardStyle = css({
    display: 'inline-flex',
    borderStyle: 'solid',
    borderRadius: theme.borderRadius.xl,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.palette.gray.dark,
  });
  return (
    <Box.Flex as="article" {...rest} sx={cardStyle}>
      {children}
    </Box.Flex>
  );
}

export default Card;
