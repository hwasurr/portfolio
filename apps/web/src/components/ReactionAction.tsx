import { Box, Button } from '@my/components';
import { useState } from 'react';
import { VscReactions } from 'react-icons/vsc';
import {
  GameReaction,
  useAddGameReactionMutation,
  useRemoveGameReactionMutation,
} from '../__generated__/graphql';

export const reactionEmoji = ['💖', '👏', '👍', '👎', '💯', '👀', '🚀'];
export function ReactionAction(): JSX.Element {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  const [__, addReaction] = useAddGameReactionMutation();
  const onReactionClicked = (targetEmoji: string): void => {
    addReaction({ gameId: 8, reactionEmoji: targetEmoji }).then(() => {
      handleToggle();
    });
  };

  const [___, removeReaction] = useRemoveGameReactionMutation();
  const onReactionRemove = (reaction: GameReaction): void => {
    removeReaction({ removeGameReactionId: reaction.id });
  };

  return (
    <Box>
      <Button variant="outline" onClick={handleToggle}>
        <VscReactions size={20} />
      </Button>

      {!toggle ? null : (
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
