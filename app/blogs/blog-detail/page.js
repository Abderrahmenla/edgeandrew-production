import RelatedPosts from '@/app/components/blog/related-posts';
import BlogPostDetail from '@/app/components/blog/blog-post-detail';
import { fetchGraphQL } from '@/app/utils';
import { blogPostDetailQuery } from '../../queries';

export const metadata = {
  title: 'Edge Andrew - Blog detail',
  description: 'Edge Andrew blog detail page',
};

export default async function BlogDetail() {
  const data = await fetchGraphQL(blogPostDetailQuery);
  
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between w-full">
      <BlogPostDetail
        blogDetail={data.data.blogDetailCollection.items[0]}
      />
      <RelatedPosts
        relatedPosts={
          data.data.blogDetailCollection.items[0]
            .relatedPostsCollection
        }
      />
    </main>
  );
}
