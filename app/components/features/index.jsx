'use client';
import Image from 'next/image';
import FeatureCard from './features-card';
import PropTypes from 'prop-types';

export default function Features({ sectionTitle, description, features }) {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-white">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-center gap-8 sm:gap-28 h-full w-full">
        <div className="relative w-[247px] h-[417px] sm:w-[400px] sm:h-[701px] mx-auto mt-20 sm:mx-0 sm:my-auto">
          <Image
            src="/images/iphone.webp"
            fill
            className="absolute object-cover"
            alt="edgeandrew mobile"
          />
        </div>
        <div className="flex flex-col items-center justify-start sm:mt-48 mb-20 sm:mb-64 mx-auto sm:mx-0 max-w-[84%] sm:max-h-[51%] sm:max-w-[34%]">
          <div className="flex flex-col items-center justify-start w-full gap-6 sm:gap-9">
            <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
              <span className="font-bold text-base text-blue_900_01 text-left w-auto">
                                KEY FEATURES
              </span>
              <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto md:w-full">
                <h2 className="font-medium sm:max-w-full max-w-screen-sm text-2xl sm:text-5xl text-gray_900_02 text-left sm:leading-[60px]">
                  {sectionTitle}
                </h2>
                <p className="font-normal sm:max-w-full max-w-screen-sm not-italic text-base text-gray_600 text-left sm:text-2xl sm:leading-[28.00px]">
                  {description}
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 flex flex-col items-start justify-center sm:items-start sm:justify-start mt-10 w-full gap-7">
              {features?.map((feature, index) => (
                <FeatureCard {...feature} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Features.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
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
      textColor: PropTypes.string,
    })
  ),
};
