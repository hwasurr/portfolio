import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { ICreateUserDto } from '@my/common';
import { Box, Button, Form, FormErrorText, Text, TextInput } from '@my/components';
import {
  IsString,
  MinLength,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getRandomEmoji } from '../../utils/getRandomEmoji';
import { useSignupMutation } from '../../__generated__/graphql';

@ValidatorConstraint({ name: 'CustomMatchPasswords', async: false })
export class CustomMatchPasswords implements ValidatorConstraintInterface {
  validate(password: string, args: ValidationArguments): boolean {
    if (password !== (args.object as any)[args.constraints[0]]) return false;
    return true;
  }

  defaultMessage(_args: ValidationArguments): string {
    return '비밀번호가 일치하지 않습니다.';
  }
}
class SignupDto implements ICreateUserDto {
  @MinLength(1, { message: '아이디를 입력해주세요.' })
  @IsString()
  loginId: string;

  @MinLength(1, { message: '비밀번호를 입력해주세요.' })
  @IsString()
  password: string;

  @MinLength(1, { message: '비밀번호확인을 입력해주세요.' })
  @IsString()
  @Validate(CustomMatchPasswords, ['password'])
  passwordMatch: string;
}
const hookFormResolver = classValidatorResolver(SignupDto);

export function SignupForm(): JSX.Element {
  const navigate = useNavigate();
  const { handleSubmit, formState, register } = useForm<SignupDto>({
    resolver: hookFormResolver,
  });
  const [__, executeSignup] = useSignupMutation();
  const onSubmit = async (formData: SignupDto): Promise<void> => {
    return executeSignup({
      data: {
        loginId: formData.loginId,
        password: formData.password,
        avatar: getRandomEmoji(),
      },
    })
      .then((result) => {
        if (result.error) {
          console.log(result.error);
          // TODO noti toast render
          return alert('signup 실패');
        }
        return navigate('/signup', { replace: true });
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

        <TextInput
          fullWidth
          placeholder="비밀번호 확인"
          type="password"
          isError={!!formState.errors.passwordMatch}
          {...register('passwordMatch')}
        />
        <FormErrorText isError={!!formState.errors.passwordMatch}>
          {formState.errors.passwordMatch?.message}
        </FormErrorText>

        {/* <TextInput
          fullWidth
          placeholder="이메일"
          type="email"
          isError={!!formState.errors.email}
          {...register('email')}
        />
        {formState.errors.email ? (
          <FormErrorText isError={!!formState.errors.email}>
            {formState.errors.email?.message}
          </FormErrorText>
        ) : (
          <Text fontSize="xs" color="gray">
            이메일은 잊은 비밀번호를 확인할 때 사용됩니다.
          </Text>
        )} */}

        <Button fullWidth size="lg" type="submit" isLoading={formState.isSubmitting}>
          <Text>회원가입</Text>
        </Button>
      </Box.Flex>
    </Form>
  );
}

export default SignupForm;
