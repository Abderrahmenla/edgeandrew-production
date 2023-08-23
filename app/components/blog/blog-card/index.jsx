import Image from 'next/image';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

export default function BlogCard({
  className,
  postImage,
  author,
  title,
  publishedDate,
  description,
}) {
  const parsedDate = parseISO(publishedDate);
  const date = format(parsedDate, 'dd MMMM yyyy');
  return (
    <div
      className={`${className} flex flex-col gap-3 h-full items-start justify-start w-full`}
    >
      <div className=" relative w-full">
        <Image
          src={postImage.image.url}
          width={postImage.image.width}
          height={postImage.image.height}
          className="m-auto object-cover rounded-[16px] w-full bg-center bg-cover"
          alt={postImage.imageAlt}
        />
        <div className="absolute bg-gradient-to-br from-blue-900 to-gray-200 mix-blend-multiply h-full inset-[0] justify-center m-auto rounded-[16px] w-full"></div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start w-full">
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <p className="font-normal not-italic text-base text-blue_900_01 text-left w-auto">
            {title}
          </p>
          <p className="font-medium leading-[32.00px] max-w-[310px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray_900_02 text-left">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <p className="font-normal not-italic text-base text-gray_400 text-left w-auto">
                        By {author} - {date}
          </p>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
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
};
