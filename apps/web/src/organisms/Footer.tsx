import { useTheme } from '@emotion/react';
import { Box, Text } from '@my/components';
import Section from '../components/section/Section';

export default function Footer(): JSX.Element {
  const theme = useTheme();
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
        <Text>Created by Hwasurr</Text>
        <Text>Design inspired by Sandbox</Text>
      </Box>
    </Box.Flex>
  );
}
