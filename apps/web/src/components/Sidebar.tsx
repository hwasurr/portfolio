import { useTheme } from '@emotion/react';
import { Box, Button, Heading, List, Text } from '@my/components';
import { NavbarHeight } from './Navbar';

// TODO: 사이드바 컴포넌트 정리
export function Sidebar(): JSX.Element {
  const theme = useTheme();
  return (
    <Box as="aside" minHeight={`calc(100vh - ${NavbarHeight})`} position="relative">
      <Box position="sticky" top={`calc(${theme.spacing[4]} + ${NavbarHeight})`} left={0}>
        {/* 서비스 간단 소개 및 시작 */}
        <Box
          paddingY={2}
          rounded="xl"
          border={`${theme.borderWidth.thin} solid ${theme.palette.gray.light}`}
        >
          <Box padding={4}>
            <Heading.H6>
              파빙(얼음깨기)은 Ice Breaking 을 위한 질문, 게임정보를 전해줘요.
            </Heading.H6>
          </Box>

          <Box paddingX={4} paddingY={1}>
            <List>
              <List.Item>
                <Text fontSize="sm">찾기 힘들었던 오프라인용 간단 게임.</Text>
              </List.Item>
              <List.Item>
                <Text fontSize="sm">어색한 공기를 없애고 싶을 때.</Text>
              </List.Item>
              <List.Item>
                <Text fontSize="sm">사내, 교내, 동아리 친목 활동용 놀이.</Text>
              </List.Item>
              <List.Item>
                <Text fontSize="sm">술자리 게임 먼저 배워 다 이겨먹기.</Text>
              </List.Item>
              <List.Item>
                <Text fontSize="sm">애자일 프로세스 팀활동.</Text>
              </List.Item>
            </List>
          </Box>

          <Box.Flex flexDir="column" gap={2} paddingX={4} paddingY={2}>
            <Box>
              <Button size="lg" color="primary" fullWidth>
                공유하기
              </Button>
            </Box>
          </Box.Flex>
        </Box>

        {/* 광고 지면 */}
        <Box.Flex
          marginY={4}
          width="100%"
          height="300px"
          align="center"
          justify="center"
          sx={{ backgroundColor: 'lightgray' }}
        >
          <Text color="gray">광고지면</Text>
        </Box.Flex>
      </Box>
    </Box>
  );
}

export default Sidebar;
