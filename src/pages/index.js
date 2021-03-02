import Head from 'next/head';
import Link from 'next/link';
import { Auth } from 'aws-amplify';

const Home = () => {

  return (
    <div>
      <Head>
        <title>REBUILD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button onClick={() => Auth.federatedSignIn()}>Login</button>
      </div>
      <Link href='/user/profile' >
        <a>User</a>
      </Link>
    </div>
  )
};

export default Home;