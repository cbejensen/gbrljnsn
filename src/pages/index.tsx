import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <main>hello</main>;
};

Home.getLayout = (page) => page;

export default Home;
