import { Badge, Box, Text } from '@my/components';
import { TagsQuery, useTagsQuery } from '../../__generated__/graphql';

export interface TagListProps extends Pick<TagProps, 'hideDescription'> {
  onSelect?: (tag: TagsQuery['tags'][number]) => void;
  direction?: 'row' | 'column';
}
export function TagList({
  hideDescription,
  onSelect,
  direction = 'column',
}: TagListProps): JSX.Element {
  const [tagsQuery] = useTagsQuery();
  const rowDirection = direction === 'row';
  return (
    <Box
      maxHeight="400px"
      minHeight={rowDirection ? '40px' : '100px'}
      sx={{ overflow: 'auto' }}
      display="flex"
      flexDir={direction}
      align={rowDirection ? 'flex-start' : undefined}
      gap={1}
    >
      {tagsQuery.data?.tags.length === 0 ? '태그가 없습니다.' : null}
      {tagsQuery.data?.tags.map((tag) => (
        <Tag
          key={tag.id}
          tag={tag}
          hideDescription={hideDescription}
          onClick={onSelect ? () => onSelect(tag) : undefined}
        />
      ))}
    </Box>
  );
}
export default TagList;

export interface TagProps {
  tag: TagsQuery['tags'][number];
  hideDescription?: boolean;
  onClick?: () => void;
}
export function Tag({ tag, hideDescription = false, onClick }: TagProps): JSX.Element {
  return (
    <Box.Flex gap={2}>
      <Badge onClick={onClick} color={tag.color}>
        {tag.title}
      </Badge>
      {hideDescription ? null : <Text>{tag.description}</Text>}
    </Box.Flex>
  );
}
