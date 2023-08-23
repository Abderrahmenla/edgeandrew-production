import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Partners({ sectionTitle, partnersLogo }) {
  return (
    <section className="bg-gray_50 flex flex-col font-aeonik items-center justify-end md:h-[22vh] w-full">
      <div className="flex flex-col gap-12 items-center justify-start w-[84%] md:max-w-4/5 md:m-auto mx-auto mt-10 mb-20">
        <h3 className="capitalize font-medium text-base text-blue_gray_300 text-center sm:text-2xl tracking-[11%] w-auto">
          {sectionTitle}
        </h3>
        <div className="flex flex-wrap justify-center items-center xl:flex-no-wrap gap-8 xl:gap-16 w-full">
          {partnersLogo.map((partner, index) => (
            <div
              className="flex sm:items-center sm:justify-center w-1/5 sm:w-auto "
              key={index}
            >
              <Image
                src={partner.image.url}
                width={partner.image.width}
                height={partner.image.height}
                alt={partner.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  partnersLogo: PropTypes.arrayOf(
    PropTypes.shape({
      imageAlt: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};
