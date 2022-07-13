import { useTheme } from '@emotion/react';
import { Box } from '@my/components';
import type { Property } from 'csstype';
import { PropsWithChildren } from 'react';
import Navbar, { NavbarHeight } from '../Navbar';

export interface GlobalLayoutProps extends PropsWithChildren {
  gridTemplateColumns: Property.GridTemplateColumns;
}
export function GlobalLayout({
  children,
  gridTemplateColumns,
}: GlobalLayoutProps): JSX.Element {
  const theme = useTheme();
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
          margin: `${theme.spacing[4]} auto 0`,
          display: 'grid',
          gridTemplateColumns,
          paddingTop: NavbarHeight,
        }}
      >
        {children}
      </Box>

      {/* Navbar는 Fixed로 최상단에 위치함 */}
      <Navbar />
    </Box>
  );
}

export default GlobalLayout;
