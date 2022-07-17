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

class LoginDto {
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
  const { handleSubmit, formState, register } = useForm<LoginDto>({
    resolver: hookFormResolver,
  });
  const [__, executeLogin] = useLoginMutation();
  const onSubmit = async (formData: LoginDto): Promise<void> => {
    return executeLogin(formData)
      .then((result) => {
        if (result.error) {
          console.log(result.error.message);
          // TODO noti toast render
          return alert('login 실패');
        }
        if (!result.data?.login) return alert('login 실패');
        localStorage.setItem('AT', result.data?.login.accessToken || '');
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

        <Button fullWidth size="lg" type="submit">
          <Text>로그인</Text>
        </Button>
        <CustomLink to="/signup">
          <Button fullWidth size="lg" variant="outline">
            <Text> 회원가입</Text>
          </Button>
        </CustomLink>
      </Box.Flex>
    </Form>
  );
}

export default LoginForm;
