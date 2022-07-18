import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { IUpdateTagDto } from '@my/common';
import { Box, Button, Form, FormErrorText, Text, TextInput } from '@my/components';
import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { useForm } from 'react-hook-form';
import useDisclosure from '../../hooks/useToggle';
import {
  TagsQuery,
  useDeleteTagMutation,
  useTagsQuery,
  useUpdateTagMutation,
} from '../../__generated__/graphql';
import { Tag } from './TagList';

export function TagManageList(): JSX.Element {
  const [tagsQuery] = useTagsQuery();
  return (
    <Box maxHeight="400px" sx={{ overflow: 'auto' }}>
      {tagsQuery.data?.tags.length === 0 ? '태그가 없습니다.' : null}
      {tagsQuery.data?.tags.map((tag) => (
        <TagManageListItem key={tag.id} tag={tag} />
      ))}
    </Box>
  );
}

export default TagManageList;

class UpdateTagFormDto implements IUpdateTagDto {
  @IsDefined() @IsNumber() id: number;
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() color?: string;
  @IsOptional() @IsString() description?: string;
}
const updateFormResolver = classValidatorResolver(UpdateTagFormDto);
export interface TagManageListItemProps {
  tag: TagsQuery['tags'][number];
}
export function TagManageListItem({ tag }: TagManageListItemProps): JSX.Element {
  // * Delete
  const [____, deleteTag] = useDeleteTagMutation();
  const handleDeleteTag = (): void => {
    if (window && window.confirm('삭제합니까?')) {
      deleteTag({ deleteTagId: tag.id });
    }
  };

  // * Update
  const { open: editMode, onToggle, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateTagFormDto>({
    resolver: updateFormResolver,
    defaultValues: {
      id: tag.id,
      color: tag.color,
      description: tag.description,
      title: tag.title,
    },
  });
  const [__, updateTag] = useUpdateTagMutation();
  const onUpdateSubmit = (formData: UpdateTagFormDto): void => {
    updateTag({ dto: formData }).then(() => {
      onClose();
    });
  };

  return (
    <Box.Flex gap={2} marginY={2} key={tag.id}>
      {editMode ? (
        <Form onSubmit={handleSubmit(onUpdateSubmit)}>
          <Box.Flex gap={2} align="start">
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                태그이름
              </Text>
              <TextInput
                size="sm"
                sx={{ maxWidth: 100 }}
                placeholder="태그이름"
                {...register('title', { required: '입력바람' })}
              />
              <FormErrorText isError={!!errors.title}>
                {errors.title?.message}
              </FormErrorText>
            </Box>

            <Box>
              <Text fontSize="sm" fontWeight="bold">
                태그설명
              </Text>
              <TextInput
                size="sm"
                sx={{ maxWidth: 100 }}
                placeholder="태그설명"
                {...register('description', { required: '입력바람' })}
              />
              <FormErrorText isError={!!errors.description}>
                {errors.description?.message}
              </FormErrorText>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                태그색상
              </Text>
              <TextInput
                size="sm"
                sx={{ maxWidth: 75 }}
                type="color"
                placeholder="태그색상"
                {...register('color', { required: '입력바람' })}
              />
              <FormErrorText isError={!!errors.color}>
                {errors.color?.message}
              </FormErrorText>
            </Box>
            <Button size="sm" variant="outline" type="submit" isLoading={isSubmitting}>
              수정확정
            </Button>
            <Button size="sm" color="gray" variant="outline" onClick={onClose}>
              닫기
            </Button>
          </Box.Flex>
        </Form>
      ) : (
        <Tag tag={tag} />
      )}

      {editMode ? null : (
        <>
          <Button variant="outline" size="sm" onClick={onToggle}>
            수정
          </Button>
          <Button variant="outline" size="sm" onClick={handleDeleteTag}>
            삭제
          </Button>
        </>
      )}
    </Box.Flex>
  );
}
