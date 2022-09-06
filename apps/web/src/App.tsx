import { ThemeProvider } from '@emotion/react';
import { theme } from '@my/style';
import dayjs from 'dayjs';
import koLocale from 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as UrqlProvider } from 'urql';
import { urqlClient } from './client/urqlClient';
import AdminLayout from './components/layouts/AdminLayout';
import Index from './pages';
import GameManage from './pages/admin/game';
import TagManage from './pages/admin/tag-manage';
import UserManage from './pages/admin/user-manage';
import GameDetail from './pages/games/[gamename]';
import Login from './pages/login';
import Mypage from './pages/mypage';
import SandboxClone from './pages/sandbox-clone';
import Signup from './pages/signup';

dayjs.locale(koLocale);
dayjs.extend(relativeTime);
export function App(): JSX.Element {
  return (
    <UrqlProvider value={urqlClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="/admin/game" element={<GameManage />} />
            <Route path="/admin/tag" element={<TagManage />} />
            <Route path="/admin/user" element={<UserManage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Index />} />
            <Route path="/games" element={<Index />} />
            <Route path="/games/:gamename" element={<GameDetail />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/sandbox-clone" element={<SandboxClone />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UrqlProvider>
  );
}

export default App;
