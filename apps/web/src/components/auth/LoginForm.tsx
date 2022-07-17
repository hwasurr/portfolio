import { ILoginArgs } from '@my/common';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import {
  Box,
  Button,
  CustomLink,
  Form,
  FormErrorText,
  Text,
  TextInput,
} from '@my/components';
import { IsString, MinLength } from 'class-validator';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../__generated__/graphql';
import { TokenManager } from '../../utils/token-manager/tokenManager';

class LoginDto implements ILoginArgs {
  @MinLength(1, { message: '아이디를 입력해주세요.' })
  @IsString()
  loginId: string;

  @MinLength(1, { message: '비밀번호를 입력해주세요.' })
  @IsString()
  password: string;
}
const hookFormResolver = classValidatorResolver(LoginDto);
export function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const navigateToSignup = (): void => {
    navigate('/signup');
  };
  const { handleSubmit, formState, register, setValue, setFocus } = useForm<LoginDto>({
    resolver: hookFormResolver,
  });
  const [__, executeLogin] = useLoginMutation();
  const onSubmit = async (formData: LoginDto): Promise<void> => {
    return executeLogin(formData)
      .then((result) => {
        if (result.error) {
          console.log(result.error.message);
          setValue('password', '');
          setFocus('password');
          // TODO noti toast render
          return alert('login 실패');
        }
        if (!result.data?.login) return alert('login 실패');
        TokenManager.setAccessToken(result.data.login.accessToken);
        return navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box.Flex flexDir="column" gap={2}>
        <TextInput
          fullWidth
          placeholder="아이디"
          type="text"
          isError={!!formState.errors.loginId}
          {...register('loginId')}
        />
        <FormErrorText isError={!!formState.errors.loginId}>
          {formState.errors.loginId?.message}
        </FormErrorText>

        <TextInput
          fullWidth
          placeholder="비밀번호"
          type="password"
          isError={!!formState.errors.password}
          {...register('password')}
        />
        <FormErrorText isError={!!formState.errors.password}>
          {formState.errors.password?.message}
        </FormErrorText>

        <Box.Flex gap={2}>
          <Button fullWidth size="lg" type="submit">
            <Text>로그인</Text>
          </Button>
          <Button fullWidth size="lg" variant="outline" onClick={navigateToSignup}>
            <Text> 회원가입</Text>
          </Button>
        </Box.Flex>
      </Box.Flex>
    </Form>
  );
}

export default LoginForm;
