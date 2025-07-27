import Layout from '@/components/Layout/Layout';
import { useProfile } from '../profile/useProfile';
import Catalog from '@/components/Catalog/Catalog';

const Favorites = () => {
  const { profile } = useProfile();
  return (
    <Layout>
      <Catalog title="Favorites" products={profile?.favorites || []} />
    </Layout>
  );
};

export default Favorites;
