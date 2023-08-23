'use client';
import Button from '../button';
import PricingCard from './pricing-card';
import PropTypes from 'prop-types';

export default function PricingSection({
  sectionTitle,
  sectionButton,
  personalUse,
  teamUse,
}) {
  const currentWidth = () => {
    if (typeof window !== 'undefined') return window.innerWidth;
    return null;
  };
  const width = currentWidth();
  return (
    <section className="bg-gradient flex flex-col items-center justify-start w-full h-auto md:h-[549px]">
      {width && (
        <div
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-full h-full"
          style={{
            backgroundImage:
                            width > 550
                              ? 'url(\'images/horizontal-stroke.svg\')'
                              : 'url(\'images/vertical-stroke.svg\')',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between xl:w-[68%] w-[84%] gap-8 sm:gap-0 my-24 mx-auto sm:m-auto">
            <div className="flex flex-col gap-12 items-start justify-center self-stretch sm:w-auto w-full">
              <div className="flex flex-col items-start justify-center self-stretch w-auto gap-2 sm:gap-4">
                <span className="font-bold text-amber_A400 text-base text-left w-auto">
                                    Download
                </span>
                <p className="font-medium leading-[60px] max-w-[345px] sm:text-5xl text-2xl text-left text-white_A700">
                  {sectionTitle}
                </p>
              </div>
              <Button
                className="hidden sm:block bg-indigo_900_04 "
                text={sectionButton.text}
                url={sectionButton.url}
                textColor={'white'}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-10 h-full w-full sm:w-[60%]">
              <PricingCard {...personalUse} />
              <PricingCard {...teamUse} />
            </div>
            <Button
              className="block sm:hidden bg-indigo_900_04 w-full"
              text=" Learn More"
              url="/about"
              textColor={'white'}
            />
          </div>
        </div>
      )}
    </section>
  );
}

PricingSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  personalUse: PropTypes.shape({
    hook: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    annualPrice: PropTypes.number.isRequired,
    monthlyPrice: PropTypes.number,
    ctaButton: PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  teamUse: PropTypes.shape({
    hook: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    annualPrice: PropTypes.number.isRequired,
    monthlyPrice: PropTypes.number,
    ctaButton: PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
