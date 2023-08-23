import Image from 'next/image';
import PropTypes from 'prop-types';

export default function PmFocus({
  headerSection,
  bodySectionCollection,
  imageSection,
}) {
  return (
    <section className="bg-gradient flex items-center justify-center w-full min-h-screen sm:min-h-[80vh] ">
      <div className="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-14 w-full 2xl:w-[68%] sm:h-[80%] mx-8 my-12 xl:mx-10 xl:my-20 2xl:mx-auto 2xl:my-auto">
        <div className="xl:w-full xl:h-full order-1 sm:order-2">
          <Image
            src={imageSection.url}
            width={imageSection.width}
            height={imageSection.height}
            className="rounded-3xl w-full h-full object-cover"
            alt="women in gym"
          />
        </div>
        <div className="flex flex-col items-start justify-start xl:max-w-[47%] gap-6 sm:gap-10 order-1 sm:order-2">
          <div className="flex flex-col gap-2 sm:gap-8">
            <Image
              src={headerSection.icon.image.url}
              width={headerSection.icon.image.width}
              height={headerSection.icon.image.height}
              className=" justify-center object-cover"
              alt={headerSection.icon.imageAlt}
            />
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <h2 className="font-medium leading-8 xl:leading-10 2xl:leading-[60px] sm:max-w-full max-w-screen-sm text-2xl xl:4xl 2xl:text-5xl text-white text-left">
                {headerSection.title}
              </h2>
              <p className="font-normal leading-6 xl:leading-8 2xl:leading-10 md:max-w-full max-w-screen-sm not-italic text-gray_600 text-left text-lg xl:text-2xl 2xl:text-3xl">
                {headerSection.subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-8 max-w-[84%] xl:w-full 2xl:max-w-[90%]">
            {bodySectionCollection.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full"
              >
                <h3 className="font-bold sm:font-medium leading-[22px] sm:leading-[30px] md:max-w-full max-w-screen-sm text-lg sm:text-2xl text-white text-left">
                  {item.name}
                </h3>
                <p className="font-normal leading-5 md:max-w-full max-w-screen-sm not-italic text-base text-gray_400 text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

PmFocus.propTypes = {
  headerSection: PropTypes.shape({
    icon: PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
      imageAlt: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  bodySectionCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  imageSection: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};
