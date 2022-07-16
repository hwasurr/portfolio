import { Box } from '@my/components';
import { GameCardList } from '../components/GameCard';
import GlobalLayout from '../components/layouts/GlobalLayout';
import Sidebar from '../components/Sidebar';
import SubNavbar from '../components/SubNavbar';
import Toolbar from '../components/Toolbar';
import useScrollToTop from '../hooks/useScrollToTop';

export function Index(): JSX.Element {
  useScrollToTop();
  return (
    <GlobalLayout gridTemplateColumns="1fr 3fr 1fr">
      {/* 왼쪽 사이드바 */}
      <Sidebar />

      {/* 메인 내용 */}
      <Box as="main" paddingX={2} position="relative">
        <SubNavbar />
        <Box marginY={3}>
          <GameCardList />
        </Box>
      </Box>

      {/* 우측 툴바 */}
      <Toolbar />
    </GlobalLayout>
  );
}

export default Index;
