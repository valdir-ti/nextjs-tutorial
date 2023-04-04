import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
                <Link href={`/posts/${id}`}>{id}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}