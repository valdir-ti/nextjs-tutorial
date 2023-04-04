import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Valdir. I'm a software engineer and love discover new things about NextJS every day.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="https://nextjs.org/learn" target="_blank">our Next.js tutorial</Link>.)
        </p>
        <div>
          <Link href="/posts/first-post">Go to Posts</Link>
        </div>
      </section>
    </Layout>
  );
}