import { Badge, Box, Button, Card, Heading, Text } from '@my/components';
import GlobalLayout from '../components/GlobalLayout';
import { NavbarHeight } from '../components/Navbar';

export function Index(): JSX.Element {
  return (
    <GlobalLayout>
      <Box position="relative">
        <Box.Flex
          gap={2}
          paddingY={4}
          position="sticky"
          top={NavbarHeight}
          left={0}
          sx={{ backgroundColor: 'white' }}
        >
          <Button variant="outline" color="primary">
            👨‍👨‍👧‍👧 단합활동
          </Button>
          <Button variant="outline" color="error">
            ❄️ 아이스브레이킹
          </Button>
          <Button variant="outline" color="success">
            🖥 원격/온라인 가능
          </Button>
          <Button variant="outline" color="gray">
            ⚽️ 월드컵
          </Button>
          <Button variant="outline" color="warn">
            ⁉️ 어색회피질문
          </Button>
        </Box.Flex>

        <Box.Flex gap={4} flexDir="column">
          <Card>
            <Card.Image
              alt="test"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCB3fW%2FbtqCZxe8EJF%2FHxXxf9jfYCp3vq4KkZkQJ0%2Fimg.jpg"
            />
            <Card.Body gap={2}>
              <Box.Flex gap={2}>
                <Badge color="primary">팀규모 3~5 명</Badge>
                <Badge color="secondary">2~3분 소요</Badge>
                <Badge color="error">실내/좌식</Badge>
                <Badge color="success">야외/입식</Badge>
                <Badge color="lightpink">소규모</Badge>
              </Box.Flex>
              <Heading.H5 fontWeight="bold">🧙두 가지 진실과 한 가지 거짓말</Heading.H5>
              <Text fontSize="sm">
                {`모든 팀원이 자신에 관한 두 가지 진실과 한 가지 거짓말을 생각하게 합니다.

            진실이 인상적일수록(예: 코스타리카에서 스카이다이빙을 해봤습니다), 거짓말이
            믿을 만할수록(예: 강아지 두 마리를 키웁니다) 게임은 더욱 흥미진진해집니다!
            그런 다음, 각 팀원에게 자신에 관한 진실 두 가지와 거짓말 한 가지를 제시할 것을
            요청하여 무엇이 거짓말 같은지 팀이 투표를 진행합니다.`}
              </Text>

              <Box.Flex gap={2}>
                <Text>#온라인가능</Text>
                <Text>#가이드제공</Text>
              </Box.Flex>

              <Box.Flex gap={2}>
                <Button>💖👏👍 30k</Button>
                <Button>💬 0</Button>
              </Box.Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Image
              alt="test"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FU99Er%2FbtqCQ275m2f%2Fbf2sAkehTKMsjoyC9sNU9K%2Fimg.jpg"
            />
            <Card.Body gap={2}>
              <Box.Flex gap={2}>
                <Badge color="lightpink">경쟁요소</Badge>
                <Badge color="primary">팀규모 3~5 명</Badge>
                <Badge color="success">야외/입식</Badge>
                <Badge color="secondary">2~3분 소요</Badge>
                <Badge color="error">실내/좌식</Badge>
              </Box.Flex>
              <Heading.H5 fontWeight="bold">🦄바뀐 모습 찾기</Heading.H5>
              <Text fontSize="sm">
                게임 방법: 팀을 두 그룹으로 나누고 두 그룹이 서로 마주 보고 서게 합니다. A
                팀은 주어진 시간 동안(15~30초) 앞에 서 있는 사람의 모습을 빠르게 관찰하며
                최대한 많은 것을 기억합니다. A 팀이 뒤로 돌아서면 B 팀은 겉모습에서 최대한
                많은 것을 바꿉니다. 서 있는 순서 바꾸기, 옆 사람과 신발을 바꿔 신기, 머리
                모양 바꾸기 등 겉모습을 바꾸는 것이라면 무엇이든 허용됩니다. 45초 후 A
                팀은 다시 뒤로 돌아서고 5~10분 동안 바뀐 것을 찾아냅니다. 그룹의 규모에
                따라 시간을 조정할 수 있습니다.
              </Text>

              <Box.Flex gap={2}>
                <Text>#오프라인only</Text>
                <Text>#정보제공</Text>
              </Box.Flex>

              <Box.Flex gap={2}>
                <Button>👏👍 30k</Button>
                <Button>💬 12</Button>
              </Box.Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Image
              alt="test"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--JL9m9ZUR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rj5848hnd5n57li42tsz.png"
            />
            <Card.Body gap={2}>
              <Box.Flex gap={2}>
                <Badge color="primary">팀규모 3~5 명</Badge>
                <Badge color="secondary">2~3분 소요</Badge>
                <Badge color="error">실내/좌식</Badge>
                <Badge color="success">야외/입식</Badge>
                <Badge color="lightpink">소규모</Badge>
              </Box.Flex>
              <Heading.H5 fontWeight="bold">💨 두 가지 진실과 한 가지 거짓말</Heading.H5>
              <Text fontSize="sm">
                모든 팀원이 자신에 관한 두 가지 진실과 한 가지 거짓말을 생각하게
                합니다.진실이 인상적일수록(예: 코스타리카에서 스카이다이빙을 해봤습니다),
                거짓말이믿을 만할수록(예: 강아지 두 마리를 키웁니다) 게임은 더욱
                흥미진진해집니다!그런 다음, 각 팀원에게 자신에 관한 진실 두 가지와 거짓말
                한 가지를 제시할 것을요청하여 무엇이 거짓말 같은지 팀이 투표를 진행합니다.
              </Text>

              <Box.Flex gap={2}>
                <Text>#가이드제공</Text>
              </Box.Flex>

              <Box.Flex gap={2}>
                <Button>👍💖 30k</Button>
                <Button>💬 12</Button>
              </Box.Flex>
            </Card.Body>
          </Card>
        </Box.Flex>

        <Box.Center>
          <Heading.H1 color="primary">Heading.H1 테스트</Heading.H1>
          <Heading.H2 color="primary">Heading.H2 테스트</Heading.H2>
          <Heading.H3 color="primary">Heading.H3 테스트</Heading.H3>
          <Heading.H4 color="primary">Heading.H4 테스트</Heading.H4>
          <Heading.H5 color="primary">Heading.H5 테스트</Heading.H5>
          <Heading.H6 color="primary">Heading.H6 테스트</Heading.H6>
          <Text fontSize="xs">Text 테스트</Text>
          <Text fontSize="xs">Text 테스트</Text>
          <Text fontSize="sm">Text 테스트</Text>
          <Text>Text 테스트</Text>
          <Text fontSize="lg">Text 테스트</Text>
          <Text fontSize="xl">Text 테스트</Text>
          <Text fontSize="2xl">Text 테스트</Text>
          <Text fontSize="3xl">Text 테스트</Text>
        </Box.Center>

        <Box.Flex justify="center" align="center" as="section">
          <Text fontSize="xs">Text 테스트</Text>
          <Text fontSize="xs">Text 테스트</Text>
          <Text fontSize="sm">Text 테스트</Text>
          <Text>Text 테스트</Text>
          <Text fontSize="lg">Text 테스트</Text>
          <Text fontSize="xl">Text 테스트</Text>
          <Text fontSize="2xl">Text 테스트</Text>
          <Text fontSize="3xl">Text 테스트</Text>
        </Box.Flex>

        <Box.Flex gap={4}>
          <Card as="section" padding={1} align="center" justify="center">
            <Text fontSize="xs">Text 테스트</Text>
            <Text fontSize="xs">Text 테스트</Text>
            <Text fontSize="sm">Text 테스트</Text>
            <Text>Text 테스트</Text>
            <Text fontSize="lg">Text 테스트</Text>
            <Text fontSize="xl">Text 테스트</Text>
            <Text fontSize="2xl">Text 테스트</Text>
            <Text fontSize="3xl">Text 테스트</Text>
          </Card>
          <Card as="section" padding={1} align="center" justify="center">
            <Text fontSize="xs">Text 테스트</Text>
            <Text fontSize="xs">Text 테스트</Text>
            <Text fontSize="sm">Text 테스트</Text>
            <Text>Text 테스트</Text>
          </Card>
        </Box.Flex>
      </Box>
    </GlobalLayout>
  );
}

export default Index;
