import { css, useTheme } from '@emotion/react';
import Box, { BoxProps } from '../../layouts/Box/Box';

export type CardProps = BoxProps;
export function Card({ children, ...rest }: BoxProps): JSX.Element {
  const theme = useTheme();
  const cardStyle = css({
    borderStyle: 'solid',
    borderRadius: theme.borderRadius.xl,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.palette.gray.light,
  });
  return (
    <Box as="article" {...rest} sx={cardStyle}>
      {children}
    </Box>
  );
}

export interface CardImageProps {
  src: string;
  alt: string;
}
function CardImage({ src }: CardImageProps): JSX.Element {
  const theme = useTheme();
  const cardImageCss = css({
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    width: '100%',
    minHeight: '280px',
    objectFit: 'contain',
    background: `url(${src}), url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvwM6R%2FbtqCQ3snviR%2FlgasJwKusFJyND3TNGwZbK%2Fimg.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });
  return <Box.Center sx={cardImageCss} />;
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
