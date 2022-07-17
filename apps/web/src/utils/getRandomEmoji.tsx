import { avatarEmojis } from '@my/common';

export const getRandomEmoji = (): string => {
  const randomAvatar = avatarEmojis[Math.floor(Math.random() * avatarEmojis.length)];
  return randomAvatar;
};

export default getRandomEmoji;
