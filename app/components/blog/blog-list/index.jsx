import BlogCard from '../blog-card';
import PropTypes from 'prop-types';

export default function BlogList({ sectionTitle, blogPosts }) {
  return (
    <section className="flex flex-col items-center justify-start w-full">
      <div className="flex flex-col items-center justify-center mx-8 my-16 xl:mx-56 2xl:mx-80 sm:my-24 self-stretch sm:gap-16 gap-7 ">
        <div className="flex flex-col gap-4 items-center justify-start w-4/5 2xl:w-1/2">
          <span className="font-bold text-base text-blue_900_01 text-center w-auto">
                        BLOG
          </span>
          <h2 className="font-medium sm:leading-[60px] max-w-[520px] md:max-w-full text-2xl sm:text-5xl text-center text-gray_900_02">
            {sectionTitle}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-start justify-start w-full">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

BlogList.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      postImage: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
        }).isRequired,
        imageAlt: PropTypes.string.isRequired,
      }).isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
