import { Box, Button, ButtonProps, Card } from '@my/components';
import { useState } from 'react';
import { VscReactions } from 'react-icons/vsc';
import useDisclosure from '../hooks/useToggle';
import {
  GameReaction,
  useAddGameReactionMutation,
  useRemoveGameReactionMutation,
} from '../__generated__/graphql';

export const reactionEmoji = ['💖', '👏', '👍', '👎', '💯', '👀', '🚀'];
export function ReactionAction(): JSX.Element {
  const { open, onToggle } = useDisclosure();
  const [__, addReaction] = useAddGameReactionMutation();
  const onReactionClicked = (targetEmoji: string): void => {
    addReaction({ gameId: 8, reactionEmoji: targetEmoji }).then(() => {
      onToggle();
    });
  };

  const [___, removeReaction] = useRemoveGameReactionMutation();
  const onReactionRemove = (reaction: GameReaction): void => {
    removeReaction({ removeGameReactionId: reaction.id });
  };

  return (
    <Box position="relative">
      <Button variant="outline" onClick={onToggle}>
        <VscReactions size={20} />
      </Button>

      {!open ? null : (
        <Card
          display="flex"
          padding={2}
          gap={2}
          marginY={1}
          position="absolute"
          border="md"
          rounded="md"
          shadow={{ base: 'sm', hover: 'sm' }}
          sx={{ backgroundColor: 'white' }}
        >
          {reactionEmoji.map((emoji) => (
            <ReactionButton key={emoji} emoji={emoji} onClick={onReactionClicked} />
          ))}
        </Card>
      )}
    </Box>
  );
}

export default ReactionAction;

interface ReactionButtonProps {
  emoji: string;
  variant?: ButtonProps['variant'];
  onClick: (emoji: string) => void;
}
export function ReactionButton({
  emoji,
  onClick,
  variant = 'outline',
}: ReactionButtonProps): JSX.Element {
  return (
    <Button
      key={emoji}
      variant={variant}
      sx={{ fontSize: 20 }}
      onClick={() => onClick(emoji)}
    >
      {emoji}
    </Button>
  );
}
