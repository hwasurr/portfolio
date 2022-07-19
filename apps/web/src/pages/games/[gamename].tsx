import { useTheme } from '@emotion/react';
import { Avatar, Box, Button, Card, Heading, Text } from '@my/components';
import dayjs from 'dayjs';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import GameCommentForm from '../../components/GameCommentForm';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import { NavbarHeight } from '../../components/Navbar';
import ReactionAction, { ReactionButton } from '../../components/ReactionAction';
import { GameQuery, useGameQuery } from '../../__generated__/graphql';

export function GameDetail(): JSX.Element | null {
  // useScrollToTop();
  const theme = useTheme();
  const { gamename } = useParams();
  // data fetching
  const [{ data: game, fetching, error }] = useGameQuery({
    pause: !gamename,
    variables: { gamename },
  });

  if (!gamename) return <Text>gamename required</Text>; // todo: render error page
  if (!game?.game) return <Text>nodata</Text>; // todo: render error page

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
          <GameDetailDescription game={game.game} />
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
          <GameDetailInfo title={game.game?.title} tags={game.game?.tags} />

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
}: Pick<NonNullable<GameQuery['game']>, 'title' | 'tags'>): JSX.Element {
  return (
    <Card padding={4} rounded="xl">
      <Heading.H5>{title}</Heading.H5>
      {tags?.map((x) => (
        <Text key={x?.title}>{x?.title}</Text>
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

export function GameDetailDescription({
  game,
}: {
  game: GameQuery['game'];
}): JSX.Element {
  return (
    <Card>
      <Card.Image
        src={game?.images[0]?.src || ''}
        alt={game?.images[0]?.name || ''}
        height="400px"
        width="100%"
      />
      <Card.Body padding={4} gap={4}>
        <Box>
          <Text color="gray" fontSize="sm">
            {dayjs(game?.createDate).format('YYYY. MM. DD HH:mm:ss')} 에 작성됨
          </Text>
          <Heading.H3>
            {game?.titleEmoji} {game?.title}
          </Heading.H3>
        </Box>

        {/* <Box.Flex gap={2}>
          {game?.metaInfos.map((x) => (
            <Text key={x.title}>#{x.title}</Text>
          ))}
        </Box.Flex> */}

        <Box.Flex flexDir="column" align="center" justify="center" gap={4}>
          <Box>
            <Text>{game?.summary}</Text>
          </Box>
          <Box>
            {/* <ReactMarkdown>{game?.information.howToPlay || ''}</ReactMarkdown> */}
          </Box>
          <Box>
            <Text>{game?.information.benefit}</Text>
          </Box>
        </Box.Flex>

        <Box.Flex gap={1}>
          <Box>
            <ReactionAction />
          </Box>
          {game?.reactions.map((reaction) => (
            <ReactionButton
              variant={reaction?.reactedByMe ? 'solid' : 'outline'}
              key={reaction?.reactionEmoji}
              emoji={reaction?.reactionEmoji || ''}
              onClick={console.log}
            />
          ))}
          {/* <Text>온라인가능게임의 경우</Text>
          <Button fullWidth>
            <Heading.H6>진행하기</Heading.H6>
          </Button> */}
        </Box.Flex>
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
