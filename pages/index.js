import Head from 'next/head';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Feed from '../components/Feed';
import Login from '../components/Login';
import { getSession } from 'next-auth/react';

export default function Home({ session }) {

  if (!session) {
    return (
      <Login />
    );
  }

  return (
    <div>
      <Head>
        <title>Facebook Clone App</title>
      </Head>
      <Header />
      <main className='flex bg-gray-100'>
        {/* Left Sidebar */}
        <LeftSidebar />
        {/* Feed (Create Post and Posts) */}
        <Feed />
        {/* Right Sidebar */}
        <RightSidebar />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
