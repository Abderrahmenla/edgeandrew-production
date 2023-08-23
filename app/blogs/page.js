import Image from 'next/image';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import { fetchGraphQL } from '../utils';
import { BlogsQuery } from '../queries';

async function fetchBlogData() {
  const data = await fetchGraphQL(BlogsQuery);
  const blogData = data.data.latestPostsSectionCollection.items[0];
  const title = blogData.title;
  const description = blogData.description;
  const blogPosts = blogData.blogPostsCollection.items;

  return { title, description, blogPosts };
}

export const metadata = {
  title: 'Edge Andrew - Blog',
  description: 'Edge Andrew blog page',
};

export default async function Blog() {
  const { title, description, blogPosts } = await fetchBlogData();
  return (
    <main className="flex bg-white justify-center items-center w-full">
      <section className="flex flex-col justify-center items-center w-full gap-16 my-20 mx-8 2xl:mx-72">
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <h1 className="font-medium leading-[60px] max-w-screen-sm sm:text-5xl md:text-[46px] text-5xl text-gray_900_02 text-left">
            {title}
          </h1>
          <p className="font-normal leading-7 max-w-[880px] not-italic text-xl text-gray_600 text-center">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:justify-start sm:items-start sm:grid sm:grid-cols-4 gap-8 w-full">
          {blogPosts.map((blogPost, index) => (
            <div className="grid-col-span-1" key={index}>
              <div className="flex flex-col gap-[13px] h-full items-start justify-start w-full">
                <div className="w-[310px] h-[260px]">
                  <Image
                    src={blogPost.postImage.image.url}
                    width={blogPost.postImage.image.width}
                    height={blogPost.postImage.image.height}
                    className=" m-auto object-cover rounded-[16px] w-full bg-center bg-cover "
                    alt={blogPost.postImage.imageAlt}
                  />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col justify-start items-start gap-2">
                    <span className="font-normal not-italic text-base text-blue_900_01 text-left w-auto">
                      {format(
                        parseISO(
                          blogPost.publishedDate
                        ),
                        'dd MMMM yyyy'
                      )}
                    </span>
                    <span className="font-bold text-[22px] text-gray_900_02 text-left max-w-[315px]">
                      {blogPost.title}
                    </span>
                  </div>
                  <p className="font-normal leading-[28.00px] max-w-[315px] not-italic text-base text-gray_600 text-left">
                    {blogPost.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      postImage: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
        }).isRequired,
        imageAlt: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
