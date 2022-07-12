import { Box } from '@my/components';
import { PropsWithChildren } from 'react';
import Navbar, { NavbarHeight } from './Navbar';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

export function GlobalLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <Box>
      <Box
        // Enable when responsive design is ready
        // maxWidth="xl"
        // width="100%"
        width="xl"
        paddingX={2}
        gap={4}
        sx={{
          margin: '16px auto 0',
          display: 'grid',
          gridTemplateColumns: '1fr 3fr 1fr',
          paddingTop: NavbarHeight,
        }}
      >
        <Sidebar />
        <Box as="main" paddingX={2}>
          {children}
        </Box>
        <Toolbar />
      </Box>

      {/* Navbar는 Fixed로 최상단에 위치함 */}
      <Navbar />
    </Box>
  );
}

export default GlobalLayout;
