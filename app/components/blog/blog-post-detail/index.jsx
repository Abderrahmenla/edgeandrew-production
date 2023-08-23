import Image from 'next/image';

export default function BlogPostDetail({ blogDetail }) {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-start items-start w-[85%] sm:w-[45%] mt-20 mb-20 sm:mb-32 mx-auto gap-10">
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <h1 className="font-bold leading-[48px] sm:leading-[58px] tracking-[-5.5%] text-4xl sm:text-5xl text-gray_900_02 text-left">
            {blogDetail.blogTitle}
          </h1>
          <p className="font-normal leading-6 sm:tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-lg text-gray_600 text-left">
            {blogDetail.description}
          </p>
        </div>
        <div className="w-full">
          <Image
            src={blogDetail.mainBlogImage.url}
            className="object-cover rounded-3xl w-full"
            width={420}
            height={272}
            alt={''}
          />
        </div>
        <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
          {blogDetail.paragraph1.json.content[0].content[0].value}
        </p>
        <div className="flex flex-col items-start justify-start gap-6 w-full">
          <h3 className="font-bold leading-[30px] tracking-[-5.5%] text-3xl text-gray_900_02 text-left">
            {blogDetail.subtitle}
          </h3>
          <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
            {blogDetail.paragraph2.json.content[0].content[0].value}
          </p>
          <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
            {blogDetail.paragraph2.json.content[1].content[0].value}
          </p>
          <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
            {blogDetail.paragraph2.json.content[2].content[0].value}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-5 w-full">
          <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 w-full">
            <div className="w-full rounded-3xl">
              <Image
                src={
                  blogDetail.blogPostImagesCollection.items[0]
                    .url
                }
                className="object-cover rounded-[16px] w-full"
                width={420}
                height={272}
                alt={''}
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-6 w-full">
              <span className="font-bold leading-[30px] tracking-[-5.5%] text-3xl text-gray_900_02 text-left">
                {blogDetail.image1Title}
              </span>
              <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
                {blogDetail.imagesDescription[0]}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 w-full">
            <div className="w-full rounded-3xl">
              <Image
                src={
                  blogDetail.blogPostImagesCollection.items[1]
                    .url
                }
                className="object-cover rounded-[16px] w-full"
                width={420}
                height={272}
                alt={''}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 sm:gap-6 w-full">
              <span className="font-bold leading-[30px] tracking-[-5.5%] text-3xl text-gray_900_02 text-left">
                {blogDetail.image1Title}
              </span>
              <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
                {blogDetail.imagesDescription[1]}
              </p>
            </div>
          </div>
        </div>
        <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
          {blogDetail.paragraph3.json.content[0].content[0].value}
        </p>
      </div>
    </section>
  );
}
