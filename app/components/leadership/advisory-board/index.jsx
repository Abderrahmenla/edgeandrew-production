import Image from 'next/image';
import PropTypes from 'prop-types';

export default function AdvisoryBoard({ sectionTitle, advisors }) {
  return (
    <section className="bg-gradient flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-14 w-full my-20 mx-8 sm:mb-36 sm:mt-20 2xl:mx-64">
        <h2 className="font-medium leading-9 sm:leading-[70px] tracking-[-5.5%] md:max-w-full max-w-screen-sm text-2xl sm:text-6xl text-white text-center sm:text-left">
          {sectionTitle}
        </h2>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center sm:items-start gap-6 sm:gap-20 w-full">
          {advisors.map((advisor, index) => (
            <div
              className="flex flex-col items-center justify-center sm:items-start sm:justify-start gap-6"
              key={index}
            >
              <div className="w-[315px] h-[315px] sm:w-[376px] sm:h-[376px]">
                <Image
                  src={advisor.avatar.image.url}
                  alt={advisor.avatar.imageAlt}
                  width={advisor.avatar.image.width}
                  height={advisor.avatar.image.height}
                  className="rounded-3xl w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 px-2 sm:px-0">
                <span className="font-bold leading-7 sm:leading-10 md:max-w-full max-w-screen-sm text-xl sm:text-3xl text-white text-center">
                  {advisor.name}
                </span>
                <p className="font-normal leading-[22px] sm:leading-8 max-w-[315px] sm:max-w-[376px] not-italic text-lg sm:text-2xl text-gray_600 text-center">
                  {advisor.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

AdvisoryBoard.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  advisors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
        }).isRequired,
        imageAlt: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};
