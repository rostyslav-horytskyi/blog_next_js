import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
