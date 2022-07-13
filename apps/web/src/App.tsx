import { ThemeProvider } from '@emotion/react';
import { theme } from '@my/style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';
import GameDetail from './pages/games/[gamename]';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games" element={<Index />} />
          <Route path="/games/:gamename" element={<GameDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
