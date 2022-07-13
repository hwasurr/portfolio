import { useTheme } from '@emotion/react';
import { Box, Text } from '@my/components';
import { NavbarHeight } from './Navbar';

// TODO: 툴바 내용 구성
export function Toolbar(): JSX.Element {
  const theme = useTheme();
  return (
    <Box as="aside" minHeight={`calc(100vh - ${NavbarHeight})`} position="relative">
      <Box.Flex
        position="sticky"
        top={`calc(${theme.spacing[4]} + ${NavbarHeight})`}
        left={0}
        flexDir="column"
        gap={4}
      >
        <Box height="300px" paddingY={2} sx={{ backgroundColor: '#dfdfdf' }} />
        <Box height="300px" paddingY={2} sx={{ backgroundColor: '#dfdfdf' }} />
        <Box.Flex
          height="300px"
          paddingY={2}
          sx={{ backgroundColor: '#dfdfdf' }}
          justify="center"
          align="center"
        >
          <Text color="gray">광고지면</Text>
        </Box.Flex>
      </Box.Flex>
    </Box>
  );
}

export default Toolbar;
