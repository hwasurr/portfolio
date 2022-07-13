/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-nested-ternary */
import { css, Interpolation, useTheme } from '@emotion/react';
import { ITheme } from '@my/style';
import type { Property } from 'csstype';
import { useMemo } from 'react';
import Box from '../../layouts/Box/Box';
import Heading from '../../layouts/Heading/Heading';

export interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | Property.Width;
  sx?: Interpolation<ITheme>;
}
export function Avatar({ size = 'md', sx }: AvatarProps): JSX.Element {
  const theme = useTheme();
  const wORh = useMemo(
    () =>
      size === 'sm' ? '32px' : size === 'md' ? '40px' : size === 'lg' ? '48px' : size,
    [size],
  );

  const avatarCss = css({
    backgroundColor: theme.palette.gray.medium,
    overflow: 'hidden',
    flexShrink: 0,
    userSelect: 'none',
  });

  const random = Math.floor(Math.random() * avatarEmojis.length);
  const emoji = avatarEmojis[random];
  return (
    <Box.Flex
      display="inline-flex"
      as="span"
      justify="center"
      align="center"
      rounded="full"
      width={wORh}
      height={wORh}
      textAlign="center"
      sx={[avatarCss, sx]}
    >
      <Heading.H3>{emoji}</Heading.H3>
    </Box.Flex>
  );
}

export default Avatar;

export const avatarEmojis = [
  '👶',
  '🧒',
  '👩',
  '👧',
  '👦',
  '🧑',
  '👨',
  '🧔',
  '🧔‍♂️',
  '🧔‍♀️',
  '👩‍🦱',
  '🧑‍🦱',
  '👨‍🦱',
  '👩‍🦰',
  '🧑‍🦰',
  '👨‍🦰',
  '👱‍♀️',
  '👱',
  '👱‍♂️',
  '👩‍🦳',
  '🧑‍🦳',
  '👨‍🦳',
  '👩‍🦲',
  '🧑‍🦲',
  '👨‍🦲',
  '🧔',
  '👵',
  '🧓',
  '👴',
  '👲',
  '👳‍♀️',
  '👳',
  '👳‍♂️',
  '🧕',
  '👮‍♀️',
  '👮',
  '👮‍♂️',
  '👷‍♀️',
  '👷',
  '👷‍♂️',
  '💂‍♀️',
  '💂',
  '💂‍♂️',
  '🕵️‍♀️',
  '🕵️',
  '🕵️‍♂️',
  '👩‍⚕️',
  '🧑‍⚕️',
  '👨‍⚕️',
  '👩‍🌾',
  '🧑‍🌾',
  '👨‍🌾',
  '👩‍🍳',
  '🧑‍🍳',
  '👨‍🍳',
  '👩‍🎓',
  '🧑‍🎓',
  '👨‍🎓',
  '👩‍🎤',
  '🧑‍🎤',
  '👨‍🎤',
  '👩‍🏫',
  '🧑‍🏫',
  '👨‍🏫',
  '👩‍🏭',
  '🧑‍🏭',
  '👨‍🏭',
  '👩‍💻',
  '🧑‍💻',
  '👨‍💻',
  '👩‍💼',
  '🧑‍💼',
  '👨‍💼',
  '👩‍🔧',
  '🧑‍🔧',
  '👨‍🔧',
  '👩‍🔬',
  '🧑‍🔬',
  '👨‍🔬',
  '👩‍🎨',
  '🧑‍🎨',
  '👨‍🎨',
  '👩‍🚒',
  '🧑‍🚒',
  '👨‍🚒',
  '👩‍✈️',
  '🧑‍✈️',
  '👨‍✈️',
  '👩‍🚀',
  '🧑‍🚀',
  '👨‍🚀',
  '👩‍⚖️',
  '🧑‍⚖️',
  '👨‍⚖️',
  '👰‍♀️',
  '👰',
  '👰‍♂️',
  '🤵‍♀️',
  '🤵',
  '🤵‍♂️',
  '👸',
  '🤴',
  '🥷',
  '🦸‍♀️',
  '🦸',
  '🦸‍♂️',
  '🦹‍♀️',
  '🦹',
  '🦹‍♂️',
  '🤶',
  '🧑‍🎄',
  '🎅',
  '🧙‍♀️',
  '🧙',
  '🧙‍♂️',
  '🧝‍♀️',
  '🧝',
  '🧝‍♂️',
  '🧛‍♀️',
  '🧛',
  '🧛‍♂️',
  '🧟‍♀️',
  '🧟',
  '🧟‍♂️',
  '🧞‍♀️',
  '🧞',
  '🧞‍♂️',
  '🧜‍♀️',
  '🧜',
  '🧜‍♂️',
  '🧚‍♀️',
  '🧚',
  '🧚‍♂️',
  '👼',
  '🤰',
  '🤱',
  '👩‍🍼',
  '🧑‍🍼',
  '👨‍🍼',
  '🙇‍♀️',
  '🙇',
  '🙇‍♂️',
  '💁‍♀️',
  '💁',
  '💁‍♂️',
  '🙅‍♀️',
  '🙅',
  '🙅‍♂️',
  '🙆‍♀️',
  '🙆',
  '🙆‍♂️',
  '🙋‍♀️',
  '🙋',
  '🙋‍♂️',
  '🧏‍♀️',
  '🧏',
  '🧏‍♂️',
  '🤦‍♀️',
  '🤦',
  '🤦‍♂️',
  '🤷‍♀️',
  '🤷',
  '🤷‍♂️',
  '🙎‍♀️',
  '🙎',
  '🙎‍♂️',
  '🙍‍♀️',
  '🙍',
  '🙍‍♂️',
  '💇‍♀️',
  '💇',
  '💇‍♂️',
  '💆‍♀️',
  '💆',
  '💆‍♂️',
  '🧖‍♀️',
  '🧖',
  '🧖‍♂️',
];
