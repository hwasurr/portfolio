import { ThemeProvider } from '@emotion/react';
import { theme } from '@my/style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as UrqlProvider } from 'urql';
import { urqlClient } from './client/urqlClient';
import Index from './pages';
import GameDetail from './pages/games/[gamename]';
import Login from './pages/login';
import Signup from './pages/signup';

export function App(): JSX.Element {
  return (
    <UrqlProvider value={urqlClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
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
