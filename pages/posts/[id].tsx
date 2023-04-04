import { getAllPostIds, getPostData } from '../../lib/posts';

import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';

export default function Post({postData}) {
  return <Layout>
        <p className={utilStyles.headingLg}>{postData.title}</p>
        <br />
        {postData.id}
        <br />
        {postData.date}
    </Layout>;
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
        postData,
        },
    };
}