import GameCreateForm from '../../components/GameCreateForm';
import AdminLayout from '../../components/layouts/AdminLayout';

export function GameManage(): JSX.Element {
  return (
    <AdminLayout>
      <GameCreateForm />
    </AdminLayout>
  );
}

export default GameManage;
