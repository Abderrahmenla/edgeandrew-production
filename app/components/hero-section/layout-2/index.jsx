import Image from 'next/image';
import Button from '../../button';
import PropTypes from 'prop-types';

export default function HeroSection({ heroImage, title, ctaButton }) {
  return (
    <section className="relative flex items-end justify-center sm:items-center sm:justify-center mx-auto h-[92vh] w-full">
      <Image
        src={heroImage.image.url}
        className="h-screen m-auto object-cover w-full"
        fill
        alt={heroImage.imageAlt}
        priority
      />
      <div
        className={'absolute top-0 left-0 h-full w-full bg-black opacity-70'}
      ></div>
      <div className="absolute inset-0 overflow-hidden flex items-end justify-end sm:items-center sm:justify-center">
        <div className="flex flex-col items-center justify-between sm:justify-center h-[58%] w-auto xl:max-w-[45%] xl:h-[10%] gap-10 mx-10 sm:mx-auto mb-9 sm:mb-0">
          <h1 className="font-medium capitalize text-[42px] sm:text-6xl text-white_A700 text-center leading-[48px] sm:leading-[70px] sm:tracking-[-5.5%]">
            {title}
          </h1>
          {ctaButton && (
            <Button
              url={ctaButton.url}
              className="w-full sm:w-auto bg-amber_A400 text-black leading-[130%]"
              text={ctaButton.text}
            />
          )}
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  heroImage: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  ctaButton: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
