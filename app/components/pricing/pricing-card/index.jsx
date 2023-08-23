import Button from '../../button';
import PropTypes from 'prop-types';

export default function PricingCard({
  hook,
  description,
  annualPrice,
  monthlyPrice,
  ctaButton,
}) {
  return (
    <div className="bg-indigo_900_05 h-full flex flex-col items-start justify-between p-6 sm:px-5 rounded-[32px] w-full gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 items-start justify-start mt-2 w-full">
          <p className="font-bold text-[22px] text-left text-white_A700 sm:text-xl w-auto">
            {hook}
          </p>
          <p className="font-normal not-italic text-indigo_400 text-left text-lg w-auto">
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-end justify-start mr-auto mt-[33px] self-stretch w-auto">
          <span className="font-bold sm:text-4xl md:text-[42px] text-[46px] text-left text-white_A700 w-auto">
                        ${annualPrice}/
          </span>
          <span className="font-normal not-italic text-left text-lg text-white_A700 w-auto">
            {' '}
            {monthlyPrice ? 'Annualy' : 'Monthly'}{' '}
          </span>
        </div>
        {monthlyPrice && (
          <div className="flex flex-row gap-2 items-end justify-start self-stretch w-auto">
            <span className="font-bold text-blue_400 text-left text-lg w-auto">
                            ${monthlyPrice}/
            </span>
            <span className="font-normal not-italic text-blue_400 text-left text-lg w-auto">
                            Monthly
            </span>
          </div>
        )}
      </div>
      <Button
        className="border border-amber_A400 border-solid w-full"
        text={ctaButton.text}
        url={ctaButton.url}
        textColor={'amber_A400'}
      />
    </div>
  );
}

PricingCard.propTypes = {
  hook: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  annualPrice: PropTypes.number.isRequired,
  monthlyPrice: PropTypes.number,
  ctaButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
