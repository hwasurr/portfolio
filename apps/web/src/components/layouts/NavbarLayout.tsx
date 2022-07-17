import { Box } from '@my/components';
import { PropsWithChildren } from 'react';
import Navbar, { NavbarHeight } from '../Navbar';

type NavbarLayoutProps = PropsWithChildren;
export function NavbarLayout({ children }: NavbarLayoutProps): JSX.Element {
  return (
    <Box>
      <Navbar />
      <Box sx={{ paddingTop: NavbarHeight }}>{children}</Box>
    </Box>
  );
}

export default NavbarLayout;
