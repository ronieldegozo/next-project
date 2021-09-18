import '../styles/globals.css'
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <center><h2>Content Here</h2></center>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
