import { useProfileQuery, UserQuery, useUserQuery } from '../__generated__/graphql';

export const useMyProfile = (): [boolean, UserQuery['user']] => {
  const [{ data: profile }] = useProfileQuery();
  const [{ data: user }] = useUserQuery({
    pause: !profile?.profile,
    variables: { userId: profile?.profile.userId },
  });
  return [!!profile?.profile, user?.user];
};
export default useMyProfile;
