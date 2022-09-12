import { ThemeProvider } from '@emotion/react';
import { theme } from '@my/style';
import dayjs from 'dayjs';
import koLocale from 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './pages/loading';
import PortfolioPage from './pages/portfolio';

dayjs.locale(koLocale);
dayjs.extend(relativeTime);
export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
