import { Box } from '@my/components';
import { PropsWithChildren } from 'react';

export function GlobalLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <Box
      maxWidth="xl"
      width="100%"
      paddingX={2}
      gap={4}
      sx={{ margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 3fr 1fr' }}
    >
      <Box as="aside" minHeight="100vh" sx={{ backgroundColor: '#dfdfdf' }} />
      <Box as="main" sx={{ backgroundColor: '#dfdfdf' }} paddingX={2}>
        {children}
      </Box>
      <Box as="aside" minHeight="100vh" sx={{ backgroundColor: '#dfdfdf' }} />
    </Box>
  );
}

export default GlobalLayout;
