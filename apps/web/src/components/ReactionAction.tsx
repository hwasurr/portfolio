import { useTheme } from '@emotion/react';
import { Box, Button, ButtonProps, Card } from '@my/components';
import React, { useEffect, useRef, useState } from 'react';
import { VscReactions } from 'react-icons/vsc';
import useOutsideClick from '../hooks/useOutsideClick';
import useDisclosure from '../hooks/useToggle';
import {
  GameReaction,
  useAddGameReactionMutation,
  useRemoveGameReactionMutation,
} from '../__generated__/graphql';

export interface ReactionActionProps {
  gameId: number;
}

export const reactionEmoji = ['💖', '👏', '👍', '👎', '💯', '👀', '🚀'];
export function ReactionAction({ gameId }: ReactionActionProps): JSX.Element {
  const { open, onToggle, onClose } = useDisclosure();
  const [__, addReaction] = useAddGameReactionMutation();
  const onReactionClicked = (targetEmoji: string): void => {
    addReaction({ gameId, reactionEmoji: targetEmoji }).then((res) => {
      console.log(res);
      onClose();
    });
  };

  const [___, removeReaction] = useRemoveGameReactionMutation();
  const onReactionRemove = (reaction: GameReaction): void => {
    removeReaction({ removeGameReactionId: reaction.id });
  };

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);

  return (
    <div ref={ref}>
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
    </div>
  );
}

export default ReactionAction;

interface ReactionButtonProps extends Omit<ButtonProps, 'onClick'> {
  emoji: string;
  reactedCount?: number;
  reactedByMe?: boolean;
  onClick?: (emoji: string) => void;
}
export function ReactionButton({
  emoji,
  onClick,
  reactedCount,
  reactedByMe,
  size,
  ...rest
}: ReactionButtonProps): JSX.Element {
  const theme = useTheme();
  const onReactionClick: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    onClick?.(emoji);
  };
  return (
    <Button
      key={emoji}
      variant="outline"
      sx={{
        fontSize: size === 'sm' ? 14 : 16,
        backgroundColor: reactedByMe ? `${theme.palette.primary.light}30` : undefined,
      }}
      onClick={onReactionClick}
      size={size}
      {...rest}
    >
      {emoji} {reactedCount}
    </Button>
  );
}
