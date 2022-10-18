import { useTheme } from '@emotion/react';
import { Box, CustomLink, Text } from '@my/components';
import React from 'react';

export default function Footer(): JSX.Element {
  const theme = useTheme();
  const mailTo = (e: React.MouseEvent): void => {
    e.preventDefault();
    window.location.href = 'mailto:iamsupermazinga@gmail.com';
  };
  return (
    <Box.Flex
      marginY={12}
      justify="center"
      align="baseline"
      sx={{
        paddingTop: theme.spacing[40],
        position: 'relative',
        background: 'transparent',
        color: theme.palette.gray.medium,
      }}
    >
      <Box textAlign="center">
        <Text>
          Created by{' '}
          <CustomLink
            enableUnderlineAnimation
            to="mailto:iamsupermazinga@gmail.com"
            onClick={mailTo}
          >
            Hwasurr
          </CustomLink>
        </Text>
        <Text>
          Design inspired by{' '}
          <CustomLink enableUnderlineAnimation to="https://sandbox.co.kr/index.html">
            Sandbox
          </CustomLink>
        </Text>
      </Box>
    </Box.Flex>
  );
}
