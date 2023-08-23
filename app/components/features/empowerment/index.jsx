import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Empowerment({
  title,
  subtitle,
  imageSection,
  bodySectionCollection,
}) {
  return (
    <section className="flex items-center justify-center w-full ">
      <div className="flex flex-col sm:flex-row items-start justify-start sm:justify-between w-[84%] sm:w-full gap-8 sm:gap-0 my-20 mx-auto sm:m-0  sm:p-40">
        <div className="flex flex-col items-start justify-start self-stretch w-full gap-6 sm:gap-10 order-2 sm:order-1">
          <div className="flex flex-col items-start justify-start self-stretch w-auto sm:w-full gap-4 sm:gap-6">
            <h2 className="font-medium sm:leading-[60px] md:max-w-full max-w-screen-sm  sm:text-5xl text-2xl text-gray_900_02 text-left">
              {title}
            </h2>
            <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-lg sm:text-3xl text-gray_600 text-left">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4 sm:gap-8">
            {bodySectionCollection.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 sm:gap-1 items-start justify-start w-auto sm:w-full"
              >
                <h3 className="font-bold sm:font-medium leading-[22px] sm:leading-[30px] md:max-w-full max-w-screen-sm text-lg sm:text-[22px] text-gray_900_02 text-left w-full">
                  {item.name}
                </h3>
                <p className="font-normal leading-5 md:max-w-full max-w-screen-sm not-italic text-base text-gray_600 text-left w-full sm:w-[60%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full rounded-3xl sm:ml-15 order-1 sm:order-2">
          <Image
            src={imageSection.url}
            width={imageSection.width}
            height={imageSection.height}
            className=" justify-center object-cover"
            alt="mobile"
          />
        </div>
      </div>
    </section>
  );
}

Empowerment.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSection: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  bodySectionCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
