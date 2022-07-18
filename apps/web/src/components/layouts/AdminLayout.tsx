import { Role } from '@my/common';
import { Box, CustomLink, Heading } from '@my/components';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMyProfile from '../../hooks/useMyProfile';
import NavbarLayout from './NavbarLayout';

export function AdminLayout({ children }: PropsWithChildren): JSX.Element {
  const navigate = useNavigate();
  const [__isLoggedIn, user] = useMyProfile();
  useEffect(() => {
    if (!(user?.role === Role.ADMIN)) {
      navigate('/');
    }
  }, [navigate, user?.role]);
  return (
    <NavbarLayout>
      <Box maxWidth="xl" margin="auto" padding={2}>
        <Heading.H5>관리자콘솔</Heading.H5>

        <Box.Flex gap={2}>
          <CustomLink to="/admin/game">게임관리</CustomLink>
          <CustomLink to="/admin/tag">태그관리</CustomLink>
          <CustomLink to="/admin/user">유저관리</CustomLink>
        </Box.Flex>

        <Box>{children}</Box>
      </Box>
    </NavbarLayout>
  );
}

export default AdminLayout;
