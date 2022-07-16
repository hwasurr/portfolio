import { useTheme } from '@emotion/react';
import { Avatar, Box, Button, Card, Form, Heading, Text, TextArea } from '@my/components';
import { PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';
import GameCommentForm from '../../components/GameCommentForm';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import { NavbarHeight } from '../../components/Navbar';
import { dummyGames, IGameCard } from '../../data/dummy.data';
import useScrollToTop from '../../hooks/useScrollToTop';

export function GameDetailActions(): JSX.Element {
  return (
    <Box.Flex flexDir="column" gap={2}>
      <Button size="sm" variant="ghost-outline" fullWidth>
        <Text fontSize="lg">💖</Text>
        <Text color="gray">13</Text>
      </Button>
      <Button size="sm" variant="ghost-outline" fullWidth>
        <Text fontSize="lg">👏</Text>
        <Text color="gray">7</Text>
      </Button>
      <Button size="sm" variant="ghost-outline" fullWidth>
        <Text fontSize="lg">👍</Text>
        <Text color="gray">4</Text>
      </Button>
      <Button size="sm" variant="ghost-outline" fullWidth>
        <Text fontSize="lg">📎</Text>
        <Text color="gray" fontSize="sm">
          공유
        </Text>
      </Button>
    </Box.Flex>
  );
}

export function GameDetailInfo({
  title,
  tags,
}: {
  title: string;
  tags: { title: string; color: string }[];
}): JSX.Element {
  return (
    <Card padding={4} rounded="xl">
      <Heading.H5>{title}</Heading.H5>
      {tags.map((x) => (
        <Text key={x.title}>{x.title}</Text>
      ))}

      <Box.Flex gap={2} flexDir="column" marginY={4}>
        <Button fullWidth size="lg">
          <Text>시작하기</Text>
        </Button>
        <Button fullWidth size="lg" color="gray" variant="outline">
          <Text>공유하기</Text>
        </Button>
      </Box.Flex>
    </Card>
  );
}

export function GameDetailDescription({ game }: { game: IGameCard }): JSX.Element {
  return (
    <Card>
      <Card.Image src={game.image.src} alt="test" height="400px" width="100%" />
      <Card.Body padding={4} gap={4}>
        <Box>
          <Text color="gray" fontSize="sm">
            {game.createdAt} 에 작성됨
          </Text>
          <Heading.H3>
            {game.titleEmoji} {game.title}
          </Heading.H3>
        </Box>

        <Box.Flex gap={2}>
          {game.metaInfos.map((x) => (
            <Text key={x.title}>#{x.title}</Text>
          ))}
        </Box.Flex>

        <Box>
          <Text>{game.summary}</Text>
          <Text>
            {`대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 감사원은
              원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 대통령은
              필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을
              국민투표에 붙일 수 있다. 행정각부의 장은 국무위원 중에서 국무총리의 제청으로
              대통령이 임명한다. 국회의원의 수는 법률로 정하되, 200인 이상으로 한다.
              대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에
              달하여야 한다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는
              인정되지 아니한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지
              아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지
              아니한다. 재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의
              출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은
              법률로서 확정된다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서
              대통령이 임명한다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한
              압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야
              한다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을
              지지 아니한다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를
              요구할 수 없다. 공무원인 근로자는 법률이 정하는 자에 한하여
              단결권·단체교섭권 및 단체행동권을 가진다.`}
          </Text>
        </Box>

        {/* <Box>
          <Text>온라인가능게임의 경우</Text>
          <Button fullWidth>
            <Heading.H6>진행하기</Heading.H6>
          </Button>
        </Box> */}
      </Card.Body>
    </Card>
  );
}

export function GameDetailCommentItem(): JSX.Element {
  return (
    <Box.Flex gap={2}>
      <Avatar />
      <Box sx={{ margin: '8px 0px 0px' }}>
        <Text>사용자이름</Text>
        <Box paddingY={2}>
          <Text>
            {`mmmm no, not really. It's got some hoops to jump through... and a lot of
                the highlighting colors need to be overwritten manually w/o instruction so
                they're visible at all. Also VSCode will tell you it's corrupt every time
                it opens a new window... But it looks great!`}
          </Text>
        </Box>
      </Box>
    </Box.Flex>
  );
}

export function GameDetailComment(): JSX.Element {
  return (
    <Card padding={4} minHeight="40vh" id="comment" as="section">
      <Heading.H5>댓글</Heading.H5>
      <GameCommentForm />
      <Box.Flex flexDir="column" gap={2} marginY={4}>
        <GameDetailCommentItem />
        <GameDetailCommentItem />
        <GameDetailCommentItem />
        <GameDetailCommentItem />
      </Box.Flex>
    </Card>
  );
}

// export interface GameDetailProps {}
export function GameDetail(): JSX.Element | null {
  // useScrollToTop();
  const theme = useTheme();

  const { gamename } = useParams();
  if (!gamename) return null; // todo: render error page

  // data fetching
  const game = dummyGames.find((x) => x.gamename === gamename);
  if (!game) return null; // todo: render error page

  return (
    <GlobalLayout gridTemplateColumns="1fr 10fr 4fr">
      {/* 리액션, 공유 등 버튼 */}
      <Box as="aside" minHeight={`calc(100vh - ${NavbarHeight})`} position="relative">
        <Box
          position="sticky"
          top={`calc(${theme.spacing[4]} + ${NavbarHeight})`}
          left={0}
        >
          <GameDetailActions />
        </Box>
      </Box>

      {/* 메인 정보, 코멘트, 추천 게임 */}
      <Box as="main" paddingX={2} sx={{ margin: '0px 0px 16px 0px' }}>
        <Box.Flex flexDir="column" gap={2}>
          <GameDetailDescription game={game} />
          <GameDetailComment />
        </Box.Flex>
      </Box>

      {/* 게임정보, 연관 게임 */}
      <Box as="aside" minHeight={`calc(100vh - ${NavbarHeight})`} position="relative">
        <Box.Flex
          position="sticky"
          top={`calc(${theme.spacing[4]} + ${NavbarHeight})`}
          left={0}
          gap={4}
          flexDir="column"
        >
          <GameDetailInfo title={game.title} tags={game.tags} />

          <Card
            padding={4}
            rounded="xl"
            height="300px"
            display="flex"
            align="center"
            justify="center"
            sx={{ backgroundColor: 'lightgray' }}
          >
            <Text color="gray">광고지면</Text>
          </Card>

          <Card padding={4} rounded="xl" height="300px">
            <Text>TODO: 연관컨텐츠목록</Text>
          </Card>
        </Box.Flex>
      </Box>
    </GlobalLayout>
  );
}

export default GameDetail;
