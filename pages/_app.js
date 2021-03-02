import Layout from '@/modules/Layout';

// amplify setup
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
Amplify.configure({ ...awsExports, ssr: true });


function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
};

export default App;
