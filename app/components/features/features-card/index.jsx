import Image from 'next/image';
import PropTypes from 'prop-types';

export default function FeatureCard({
  icon,
  title = '',
  textColor = 'text-blue_900_01',
}) {
  return (
    <div className="flex items-center justify-start w-full gap-7 bg-gray_50_01 rounded-3xl p-2">
      <div className="h-[56px] w-[56px] flex items-center justify-center">
        <Image
          src={icon.image.url}
          width={icon.image.width}
          height={icon.image.height}
          alt={icon.imageAlt}
        />
      </div>
      <h4
        className={`font-medium ${textColor} text-left text-base sm:text-xl w-auto`}
      >
        {title}
      </h4>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string,
  textColor: PropTypes.string,
};
