import { css } from '@emotion/react';
import { Badge, Box, Button, Card, CustomLink, Heading, Text } from '@my/components';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { GamesQuery, useGamesQuery } from '../__generated__/graphql';

export interface GameCardProps {
  game: GamesQuery['games'][number];
}
export function GameCard({ game }: GameCardProps): JSX.Element {
  const gameCardHoverAnimation = css({
    transition: 'transform 0.3s',
    ':hover': { transform: 'translateY(-10px)' },
  });

  const reactions = useMemo(() => {
    return game.reactions.reduce(
      (prev, curr) => {
        if (!prev) return curr;
        return {
          count: prev.count + (curr?.count || 0),
          reactionEmoji: prev.reactionEmoji + (curr?.reactionEmoji || 0),
          reactedByMe: !prev.reactedByMe ? curr?.reactedByMe : false,
        };
      },
      { count: 0, reactionEmoji: '', reactedByMe: false },
    );
  }, [game.reactions]);

  return (
    <Card shadow={{ base: 'none', hover: 'sm' }} sx={gameCardHoverAnimation}>
      <CustomLink to={`games/${game.gamename}`}>
        {game.images.length > 0 && (
          <Card.Image alt={game.images[0]?.name || ''} src={game.images[0]?.src || ''} />
        )}
        <Card.Body gap={2}>
          <Heading.H5 fontWeight="bold" sx={{ display: 'inline-block' }}>
            {game.titleEmoji} {game.title}
          </Heading.H5>
          <Text color="black" fontSize="sm">
            {game.summary}
          </Text>

          <Box.Flex gap={2}>
            {game.tags?.slice(0, 5).map((tag) => (
              <Badge key={tag?.title} variant="outline" color={tag?.color}>
                #{tag?.title}
              </Badge>
            ))}
          </Box.Flex>

          <Box.Flex gap={2}>
            <Button variant="outline">
              {reactions?.reactionEmoji} {reactions?.count}
            </Button>
            <Button variant="outline">💬 {game.commentCount}</Button>
          </Box.Flex>

          <Box>
            <Text fontSize="sm" color="gray">
              {dayjs(game.createDate).fromNow()}
            </Text>
          </Box>
        </Card.Body>
      </CustomLink>
    </Card>
  );
}

export default GameCard;

export function GameCardList(): JSX.Element {
  const [{ data: games, fetching, error }] = useGamesQuery();
  if (fetching) return <Text>...loading</Text>;
  if (fetching && !games) return <Text>...loading</Text>;
  if (!games) return <Text>아직 게임 데이터가 없습니다.</Text>;
  if (error) return <Text>데이터를 불러올 수 없습니다.</Text>;
  return (
    <Box.Flex gap={4} flexDir="column">
      {games.games.map((game) => (
        <GameCard key={game.titleEmoji} game={game} />
      ))}
    </Box.Flex>
  );
}
