import { Box, Heading } from '@my/components';
import AdminLayout from '../../components/layouts/AdminLayout';
import TagCreateForm from '../../components/tag/TagCreateForm';
import TagManageList from '../../components/tag/TagManageList';

export function TagManage(): JSX.Element {
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
        <TagManageList />
        <TagCreateForm />
      </Box>
    </AdminLayout>
  );
}

export default TagManage;
