import { css, useTheme } from '@emotion/react';
import { IShadowKeys } from '@my/style';
import type { Property } from 'csstype';
import { PropsWithChildren } from 'react';
import Box, { BoxProps } from '../../layouts/Box/Box';

export interface CardProps extends BoxProps {
  shadow?: { base: IShadowKeys; hover: IShadowKeys };
}
export function Card({
  children,
  shadow = { base: 'none', hover: 'none' },
  ...rest
}: CardProps): JSX.Element {
  const theme = useTheme();
  const cardStyle = css({
    borderStyle: 'solid',
    borderRadius: theme.borderRadius.xl,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.palette.gray.light,
    transition: 'boxShadow 0.3s',
    boxShadow: theme.shadows[shadow.base],
    ':hover': {
      boxShadow: theme.shadows[shadow.hover],
    },
  });
  return (
    <Box as="article" {...rest} sx={[cardStyle, rest.sx]}>
      {children}
    </Box>
  );
}

export interface CardImageProps extends PropsWithChildren {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: Property.Width;
  height?: Property.Height;
}
function CardImage({
  src,
  fallbackSrc = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvwM6R%2FbtqCQ3snviR%2FlgasJwKusFJyND3TNGwZbK%2Fimg.jpg',
  children,
  ...rest
}: CardImageProps): JSX.Element {
  const theme = useTheme();
  const cardImageCss = css({
    position: 'relative',
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    width: '100%',
    minHeight: '280px',
    objectFit: 'contain',
    background: `url(${src}), url(${fallbackSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...rest,
  });
  return <Box.Center sx={cardImageCss}>{children}</Box.Center>;
}

export type CardBodyProps = BoxProps;
function CardBody({ children, ...rest }: CardBodyProps): JSX.Element {
  const theme = useTheme();
  const cardBodyCss = css({
    padding: rest.padding ? undefined : theme.spacing[4],
  });
  return (
    <Box.Flex as="section" flexDir="column" {...rest} sx={cardBodyCss}>
      {children}
    </Box.Flex>
  );
}

Card.Image = CardImage;
Card.Body = CardBody;
export default Card;
