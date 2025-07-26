import Layout from '@/components/Layout/Layout';
import { Header } from './Header';
import { Banner } from './Banner';
import { Categories } from '@/components/Categories/Categories';

const Home = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Categories />
    </Layout>
  );
};

export default Home;
