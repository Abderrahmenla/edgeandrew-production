import Image from 'next/image';
import PropTypes from 'prop-types';
import BenefitCard from './benefit-card';

export default function Benefits({ sectionTitle, description, benefits }) {
  return (
    <section className="bg-gradient flex flex-col sm:flex-row sm:items-center sm:justify-center w-full sm:min-h-screen">
      <div className="flex flex-col sm:flex-row items-center justify-end sm:items-end sm:justify-center mx-8 mt-12 sm:mt-28 sm:mb-0 sm:ml-80 sm:mr-24 h-full gap-12 sm:gap-0">
        <div className="flex flex-col gap-10 items-start justify-start w-full sm:max-w-[640px] sm:mb-28">
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-full">
            <span className="font-bold text-amber_A400 text-base text-left w-auto">
                            KEY BENEFITS
            </span>
            <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto md:w-full">
              <h2 className="font-medium leading-9 sm:leading-[60px] sm:max-w-full max-w-screen-sm text-2xl sm:text-5xl text-left text-white_A700 ">
                {sectionTitle}
              </h2>
              <p className="font-normal leading-6 md:max-w-full max-w-screen-sm not-italic text-base sm:text-xl text-gray_600 text-left">
                {description}
              </p>
            </div>
          </div>
          <div className="flex-col gap-8 grid items-start w-full">
            {benefits.map((benefit, index) => (
              <BenefitCard {...benefit} key={index} />
            ))}
          </div>
        </div>
        <div className="sm:w-[920px]">
          <Image
            src="/images/iPhone121.webp"
            className="w-full h-full"
            width={920}
            height={1064}
            style={{ objectFit: 'cover' }}
            alt="edgeandrew mobile"
          />
        </div>
      </div>
    </section>
  );
}

Benefits.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};
