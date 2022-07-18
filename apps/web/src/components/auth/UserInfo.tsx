import { useTheme } from '@emotion/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Box, Button, Form, FormErrorText, Text, TextInput } from '@my/components';
import { IsString, MinLength } from 'class-validator';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useDisclosure from '../../hooks/useToggle';
import getRandomEmoji from '../../utils/getRandomEmoji';
import {
  InputMaybe,
  UpdateUserDto,
  UserQuery,
  useUpdateUserMutation,
} from '../../__generated__/graphql';

interface UserInfoProps {
  user: Exclude<UserQuery['user'], undefined | null>;
}
export function UserInfo({ user }: UserInfoProps): JSX.Element {
  const theme = useTheme();

  return (
    <Box display="grid" sx={{ gridTemplateColumns: '1fr 3fr', rowGap: theme.spacing[2] }}>
      <Text fontSize="sm">닉네임 </Text>
      <UserInfoNickname user={user} />

      <Text fontSize="sm">대표이모지</Text>
      <UserInfoAvatar user={user} />

      {/* // TODO: 이메일 인증 + 변경 */}
      <Text fontSize="sm">이메일</Text>
      <Box.Flex>
        <Text sx={{ marginRight: theme.spacing[1] }}>{user.email}</Text>
        <Button size="sm" variant="outline">
          {user.email ? '수정하기' : '등록하기'}
        </Button>
      </Box.Flex>

      {/* // TODO: 비밀번호 수정 */}
      <Text fontSize="sm">비밀번호</Text>
      <Box.Flex>
        <Text sx={{ marginRight: theme.spacing[1] }}>******</Text>
        <Button size="sm" variant="outline">
          수정하기
        </Button>
      </Box.Flex>

      <Text fontSize="sm">가입일</Text>
      <Text>{dayjs(user.createDate).format('YYYY. MM. DD HH:mm:ss')}</Text>

      <Text fontSize="sm">최종수정</Text>
      <Text>{dayjs(user.updateDate).format('YYYY. MM. DD HH:mm:ss')}</Text>
    </Box>
  );
}

export default UserInfo;

function UserInfoAvatar({ user }: UserInfoProps): JSX.Element {
  // 이모지 선택(랜덤)
  const [currentEmoji, setCurrentEmoji] = useState(user.avatar);
  const handleEmojiChange = (): void => {
    setCurrentEmoji(getRandomEmoji());
  };

  // 이모지 변경 반영
  const [__, mutate] = useUpdateUserMutation();
  const handleEmojiUpdate = (): void => {
    // TODO: error, success 처리
    mutate({ data: { avatar: currentEmoji, id: user?.id } });
  };

  return (
    <Box.Flex gap={2}>
      <Box width="24px">
        <Text>{currentEmoji}</Text>
      </Box>
      <Button size="sm" variant="outline" onClick={handleEmojiChange}>
        (랜덤)변경
      </Button>
      {currentEmoji !== user.avatar ? (
        <Button size="sm" onClick={handleEmojiUpdate}>
          확정하기
        </Button>
      ) : null}
    </Box.Flex>
  );
}

function UserInfoNickname({ user }: UserInfoProps): JSX.Element {
  const { open: toggle, onClose, onToggle } = useDisclosure();
  return (
    <Box.Flex gap={2} flexDir="column">
      <Box.Flex gap={2}>
        <Text>{user?.nickname}</Text>
        <Button size="sm" variant="outline" onClick={onToggle}>
          {user.nickname ? '수정하기' : '등록하기'}
        </Button>
      </Box.Flex>

      {toggle ? <UserInfoNicknameForm user={user} onSuccess={onClose} /> : null}
    </Box.Flex>
  );
}

class UpdateUserInfoNicknameDto implements UpdateUserDto {
  @MinLength(2, { message: '2글자 이상 입력해주세요.' }) @IsString() nickname?:
    | InputMaybe<string>
    | undefined;

  id: number;
}
const resolver = classValidatorResolver(UpdateUserInfoNicknameDto);
interface UserInfoNicknameFormProps extends UserInfoProps {
  onSuccess?: () => void;
  onFail?: () => void;
}
function UserInfoNicknameForm({
  user,
  onFail,
  onSuccess,
}: UserInfoNicknameFormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserInfoNicknameDto>({
    defaultValues: { id: user.id },
    resolver,
  });

  const [__, mutate] = useUpdateUserMutation();
  const onSubmit = (formData: UpdateUserInfoNicknameDto): void => {
    // TODO: error, success 처리
    mutate({ data: formData })
      .then(() => {
        onSuccess?.();
      })
      .then(() => {
        onFail?.();
      });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box.Flex flexDir="column" gap={2}>
        <TextInput size="sm" isError={!!errors.nickname} {...register('nickname')} />
        <FormErrorText isError={!!errors.nickname}>
          {errors.nickname?.message}
        </FormErrorText>
        <Box.Flex gap={1}>
          <Button size="sm" type="submit" isLoading={isSubmitting}>
            확인
          </Button>
          <Button size="sm" color="gray">
            취소
          </Button>
        </Box.Flex>
      </Box.Flex>
    </Form>
  );
}
