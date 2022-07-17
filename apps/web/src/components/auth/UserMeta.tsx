import { Box, Avatar, Text } from '@my/components';
import { UserQuery } from '../../__generated__/graphql';

interface UserMetaProps {
  user: Exclude<UserQuery['user'], undefined | null>;
}
export function UserMeta({ user }: UserMetaProps): JSX.Element {
  return (
    <Box.Flex gap={2}>
      <Avatar size="lg" emoji={user?.avatar} />
      <Box>
        <Text fontSize="xl">{user?.loginId}</Text>
        <Text fontSize="sm">{user?.nickname}</Text>
      </Box>
    </Box.Flex>
  );
}

export default UserMeta;
