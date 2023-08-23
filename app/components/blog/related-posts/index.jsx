import Image from 'next/image';
import { parseISO, format } from 'date-fns';

export default function RelatedPosts({ relatedPosts }) {
  return (
    <section className="hidden sm:flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-start items-start w-auto my-20 mx-80 gap-14">
        <h2 className="font-medium leading-[60px] md:max-w-full max-w-screen-sm text-6xl text-gray_900_02 text-left">
                    Latest Posts
        </h2>
        <div className="flex flex-col sm:flex-row items-start justify-start w-full gap-6">
          {relatedPosts.items.map((blogPost, index) => (
            <div
              className="flex flex-col gap-[13px] h-full items-start justify-start w-full"
              key={index}
            >
              <div className="w-[315px] h-[260px]">
                <Image
                  src={blogPost.postImage.image.url}
                  width={315}
                  height={260}
                  className=" m-auto object-cover rounded-[16px] w-full"
                  alt={blogPost.postImage.imageAlt}
                />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col justify-start items-start gap-2">
                  <span className="font-normal not-italic text-base text-blue_900_01 text-left w-auto">
                    {format(
                      parseISO(blogPost.publishedDate),
                      'dd MMMM yyyy'
                    )}
                  </span>
                  <span className="font-bold text-xl text-gray_900_02 text-left">
                    {blogPost.title}
                  </span>
                </div>
                <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-base text-gray_600 text-left">
                  {blogPost.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
