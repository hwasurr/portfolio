import { Box, Button } from '@my/components';
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
    <Box>
      <Button variant="outline" onClick={onToggle}>
        <VscReactions size={20} />
      </Button>

      {!open ? null : (
        <Box.Flex gap={2} marginY={1}>
          {reactionEmoji.map((emoji) => (
            <ReactionButton key={emoji} emoji={emoji} onClick={onReactionClicked} />
          ))}
        </Box.Flex>
      )}
    </Box>
  );
}

export default ReactionAction;

interface ReactionButtonProps {
  emoji: string;
  onClick: (emoji: string) => void;
}
function ReactionButton({ emoji, onClick }: ReactionButtonProps): JSX.Element {
  return (
    <Button
      key={emoji}
      variant="outline"
      sx={{ fontSize: 20 }}
      onClick={() => onClick(emoji)}
    >
      {emoji}
    </Button>
  );
}
