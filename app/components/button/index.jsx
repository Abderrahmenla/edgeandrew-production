import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Button({ text, url, className, textColor }) {
  return (
    <button
      className={` ${className} cursor-pointer font-normal not-italic md:px-10 sm:px-5 px-[46px] py-5 rounded-[30px] text-base flex items-center justify-center`}
    >
      <Link
        href={url}
        className={`font-normal text-sm text-${textColor} no-underline hover:text-${textColor}`}
      >
        {' '}
        {text}{' '}
      </Link>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  textColor: PropTypes.string,
};
