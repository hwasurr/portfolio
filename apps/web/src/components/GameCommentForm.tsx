import { Form, Box, Avatar, TextArea, Text, Button } from '@my/components';
import { useForm } from 'react-hook-form';
import { IsString } from 'class-validator';
import { useCreateCommentMutation } from '../__generated__/graphql';

class CreateCommentDto {
  @IsString() title: string;
  @IsString() contents: string;
}
export function GameCommentForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCommentDto>({});

  const [{ error }, mutation] = useCreateCommentMutation();
  const onSubmit = async (formData: CreateCommentDto): Promise<void> => {
    // Graphql request
    const result = await mutation({
      data: { ...formData, title: `${new Date().getTime()}`, gameId: 1 },
    });
    console.log(result.data);
  };
  console.log(error);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box.Flex gap={2}>
        <Avatar />
        <Box width="100%">
          <TextArea
            isError={!!errors.contents}
            aria-invalid={errors.contents ? 'true' : 'false'}
            type="text"
            size="md"
            fullWidth
            rows={3}
            {...register('contents', { required: '댓글을 입력해주세요.' })}
          />
          <Text color="error">{errors.contents?.message}</Text>
        </Box>
      </Box.Flex>

      <Box textAlign="right" marginY={2}>
        <Button type="submit" isLoading={isSubmitting}>
          <Text>댓글 작성</Text>
        </Button>
      </Box>
    </Form>
  );
}
export default GameCommentForm;
