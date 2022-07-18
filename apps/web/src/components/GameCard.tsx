import { css } from '@emotion/react';
import { Badge, Box, Button, Card, CustomLink, Heading, Text } from '@my/components';
import { dummyGames, IGameCard } from '../data/dummy.data';

export interface GameCardProps {
  gameData: IGameCard;
}
export function GameCard({ gameData }: GameCardProps): JSX.Element {
  const gameCardHoverAnimation = css({
    transition: 'transform 0.3s',
    ':hover': { transform: 'translateY(-10px)' },
  });
  return (
    <Card shadow={{ base: 'none', hover: 'sm' }} sx={gameCardHoverAnimation}>
      <CustomLink to={`games/${gameData.gamename}`}>
        <Card.Image alt={gameData.image.alt} src={gameData.image.src} />
        <Card.Body gap={2}>
          <Box.Flex gap={2}>
            {gameData.tags.slice(0, 5).map((tag) => (
              <Badge key={tag.title} variant="outline" color={tag.color}>
                #{tag.title}
              </Badge>
            ))}
          </Box.Flex>
          <Heading.H5 fontWeight="bold" sx={{ display: 'inline-block' }}>
            {gameData.titleEmoji} {gameData.title}
          </Heading.H5>
          <Text color="black" fontSize="sm">
            {gameData.summary}
          </Text>

          <Box.Flex gap={2}>
            {gameData.metaInfos.map((meta) => (
              <Text color="black" key={meta.title}>
                {meta.title.includes('#') ? meta.title : `#${meta.title}`}
              </Text>
            ))}
          </Box.Flex>

          <Box.Flex gap={2}>
            <Button variant="outline">
              {gameData.reactions.emojis.reduce(
                (curr, reactionEmoji) => curr + reactionEmoji,
                '',
              )}{' '}
              {gameData.reactions.count}
            </Button>
            <Button variant="outline">💬 {gameData.commentCount}</Button>
          </Box.Flex>

          <Box>
            <Text fontSize="sm" color="gray">
              {gameData.createdAt}
            </Text>
          </Box>
        </Card.Body>
      </CustomLink>
    </Card>
  );
}

export default GameCard;

export function GameCardList(): JSX.Element {
  return (
    <Box.Flex gap={4} flexDir="column">
      {dummyGames.map((game) => (
        <GameCard key={game.titleEmoji} gameData={game} />
      ))}
    </Box.Flex>
  );
}
