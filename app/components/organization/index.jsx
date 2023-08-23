import Image from 'next/image';
import PropTypes from 'prop-types';

export default function IntroSection({ title, description, sectionImage }) {
  const paragraphs = description.json.content[0].content[0].value.split('.');
  return (
    <section className="bg-white flex items-center justify-center w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-16 w-full mt-12 mb-20 2xl:my-20">
        <div className="flex flex-col gap-4 items-start justify-start self-stretch max-w-[84%] sm:max-w-[31%] mx-auto sm:mx-0 order-2 sm:order-1">
          <span className="font-bold text-base text-blue_900_01 text-left w-auto">
                        For Organizations
          </span>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <h2 className="font-medium leading-[60px] md:max-w-full max-w-screen-sm  text-5xl text-gray_900_02 text-left">
              {title}
            </h2>
            <div className="flex flex-col items-start justify-center">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-[22px] text-gray_600 text-left "
                >
                  {paragraph}
                  <br />
                  <br />
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:w-[640px] sm:h-[640px] rounded-3xl order-1 sm:order-2">
          <Image
            src={sectionImage.image.url}
            width={sectionImage.image.width}
            height={sectionImage.image.height}
            className="rounded-3xl w-full h-full object-cover"
            alt={sectionImage.imageAlt}
          />
        </div>
      </div>
    </section>
  );
}

IntroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    json: PropTypes.shape({
      content: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.arrayOf(
            PropTypes.shape({
              value: PropTypes.string.isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  sectionImage: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
};
