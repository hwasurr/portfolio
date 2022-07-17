import { ThemeProvider } from '@emotion/react';
import { theme } from '@my/style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as UrqlProvider } from 'urql';
import { urqlClient } from './client/urqlClient';
import Index from './pages';
import GameDetail from './pages/games/[gamename]';

export function App(): JSX.Element {
  return (
    <UrqlProvider value={urqlClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/games" element={<Index />} />
            <Route path="/games/:gamename" element={<GameDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UrqlProvider>
  );
}

export default App;
