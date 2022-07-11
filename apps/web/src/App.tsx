import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@my/style';
import Index from './pages';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
