import { useTheme } from '@emotion/react';
import { Box } from '@my/components';
import type { Property } from 'csstype';
import { PropsWithChildren } from 'react';
import NavbarLayout from './NavbarLayout';

export interface GlobalLayoutProps extends PropsWithChildren {
  gridTemplateColumns: Property.GridTemplateColumns;
}
export function GlobalLayout({
  children,
  gridTemplateColumns,
}: GlobalLayoutProps): JSX.Element {
  const theme = useTheme();
  return (
    <NavbarLayout>
      <Box
        width="xl"
        paddingX={2}
        gap={4}
        sx={{
          margin: `${theme.spacing[4]} auto 0`,
          display: 'grid',
          gridTemplateColumns,
        }}
      >
        {children}
      </Box>
    </NavbarLayout>
  );
}

export default GlobalLayout;
