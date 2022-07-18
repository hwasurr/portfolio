import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { ICreateTagDto } from '@my/common';
import {
  Badge,
  Box,
  Button,
  Form,
  FormErrorText,
  Heading,
  Text,
  TextInput,
} from '@my/components';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { useForm } from 'react-hook-form';
import { VscClose } from 'react-icons/vsc';
import AdminLayout from '../../components/layouts/AdminLayout';
import {
  TagsQuery,
  useCreateTagMutation,
  useDeleteTagMutation,
  useTagsQuery,
  useUpdateTagMutation,
} from '../../__generated__/graphql';

export function TagManage(): JSX.Element {
  const [tagsQuery] = useTagsQuery();

  // * Update
  const [___, updateTag] = useUpdateTagMutation();
  const handleUpdateTag = (data: unknown): void => {
    // updateTag({ dto: data })
  };

  return (
    <AdminLayout>
      <Box
        paddingY={4}
        maxWidth="sm"
        marginY={4}
        padding={4}
        rounded="2xl"
        border="1px solid #ddd"
      >
        <Heading.H6>태그 목록</Heading.H6>

        <Box maxHeight="400px" sx={{ overflow: 'auto' }}>
          {tagsQuery.data?.tags.map((tag) => (
            <TagManageListItem key={tag.id} tag={tag} />
          ))}
        </Box>

        <TagCreateForm />
      </Box>
    </AdminLayout>
  );
}

export default TagManage;

class TagCreateDto implements ICreateTagDto {
  @MinLength(0, { message: '입력해주세요.' })
  @MaxLength(16, { message: '16자 이하로 입력해주세요' })
  @IsString()
  title: string;

  @MinLength(0, { message: '입력해주세요.' }) @IsString() color: string;
  @MinLength(0, { message: '입력해주세요.' }) @IsString() description: string;
}
const resolver = classValidatorResolver(TagCreateDto);
function TagCreateForm(): JSX.Element {
  // * Create
  const [__, createTag] = useCreateTagMutation();
  const onSubmit = (dto: TagCreateDto): void => {
    createTag({ dto });
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TagCreateDto>({ resolver });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading.H6>태그 등록</Heading.H6>
      <Box display="grid" sx={{ gridTemplateColumns: '1fr 3fr', rowGap: 8 }}>
        <Text>태그명</Text>
        <TextInput
          size="sm"
          isError={!!errors.title}
          {...register('title', { required: '입력해주세요' })}
        />
        <FormErrorText isError={!!errors.title}>{errors.title?.message}</FormErrorText>
        <Text>태그설명</Text>
        <TextInput
          size="sm"
          isError={!!errors.description}
          {...register('description', { required: '입력해주세요' })}
        />
        <FormErrorText isError={!!errors.description}>
          {errors.description?.message}
        </FormErrorText>
        <Text>태그색상</Text>
        <TextInput
          size="sm"
          isError={!!errors.color}
          type="color"
          id="head"
          {...register('color', { required: '입력해주세요' })}
        />
        <FormErrorText isError={!!errors.color}>{errors.color?.message}</FormErrorText>
      </Box>
      <Box textAlign="right" marginY={2}>
        <Button type="submit" isLoading={isSubmitting}>
          <Text>등록</Text>
        </Button>
      </Box>
    </Form>
  );
}

interface TagManageListItemProps {
  tag: TagsQuery['tags'][number];
}
function TagManageListItem({ tag }: TagManageListItemProps): JSX.Element {
  // * Delete
  const [____, deleteTag] = useDeleteTagMutation();
  const handleDeleteTag = (): void => {
    if (window && window.confirm('삭제합니까?')) {
      deleteTag({ deleteTagId: tag.id });
    }
  };
  return (
    <Box.Flex gap={2} marginY={2} key={tag.id}>
      <Badge color={tag.color}>{tag.title}</Badge>
      <Text>{tag.description}</Text>
      <Button variant="outline" size="sm" onClick={handleDeleteTag}>
        삭제
      </Button>
    </Box.Flex>
  );
}
