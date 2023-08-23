import Image from 'next/image';
import Button from '../../button';
import PropTypes from 'prop-types';

export default function HeroSection({
  imgSrc,
  imgAlt,
  title,
  ctaText,
  ctaUrl,
  subTitle,
}) {
  return (
    <section className="h-[92vh] relative mx-auto w-full">
      <div className=" w-full overflow-hidden z-10">
        <Image
          src={imgSrc}
          className="m-auto object-cover "
          fill
          alt={imgAlt}
          priority
        />
        <div className="absolute top:10 left:10 sm:top-0 sm:left-0 h-full w-full bg-indigo_900_ed opacity-75"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden flex flex-col sm:flex-row  items-center sm:justify-center justify-end w-full">
        <div className="flex flex-col items-center justify-between sm:justify-center gap-64 sm:gap-10 max-w-[84%] sm:max-w-[54%] mb-9 sm:mb-0">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-2">
            <h1 className="font-medium capitalize text-center text-[42px] sm:text-6xl text-white_A700 leading-[48px] sm:leading-[70px] tracking-[-5.5%]">
              {title}
            </h1>
            <h2 className="font-normal capitalize text-center text-xl sm:text-4xl text-white_A700 leading-7 sm:leading-[70px] tracking-[-5.5%]">
              {subTitle}
            </h2>
          </div>
          <Button
            url={ctaUrl}
            className="bg-amber_A400 text-black w-full xl:w-[170px]"
            text={ctaText}
          />
        </div>
        <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Image
            src="/icons/arrow-down-outline.svg"
            className="h-8"
            height={18}
            width={26}
            alt="arrowdown"
          />
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
