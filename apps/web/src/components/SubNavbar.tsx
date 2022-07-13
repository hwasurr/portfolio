import { useTheme } from '@emotion/react';
import { Box, Button } from '@my/components';
import { NavbarHeight } from './Navbar';

export function SubNavbar(): JSX.Element {
  const theme = useTheme();
  return (
    <Box.Flex
      gap={2}
      paddingY={4}
      position="sticky"
      top={NavbarHeight}
      left={0}
      sx={{ backgroundColor: 'white', zIndex: theme.zIndex.sticky }}
    >
      <Button variant="ghost-outline" color="primary">
        👨‍👨‍👧‍👧 단합활동
      </Button>
      <Button variant="ghost-outline" color="error">
        ❄️ 아이스브레이킹
      </Button>
      <Button variant="ghost-outline" color="success">
        🖥 원격/온라인 가능
      </Button>
      <Button variant="ghost-outline" color="gray">
        ⚽️ 월드컵
      </Button>
      <Button variant="ghost-outline" color="warn">
        ⁉️ 어색회피질문
      </Button>
    </Box.Flex>
  );
}

export default SubNavbar;
