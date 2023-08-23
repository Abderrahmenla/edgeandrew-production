import ContactForm from './contact-form';
export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-start justify-start w-full sm:w-4/5 py-20 px-8 sm:p-0 sm:ml-80 sm:mr-[355px] sm:mt-36 sm:mb-32 sm:my-36 gap-8 ">
        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="font-medium leading-8 sm:leading-[70px] tracking-[-5.5%] md:max-w-full max-w-screen-sm text-2xl sm:text-6xl text-gray_900_02 text-left">
                        Get in touch
          </h2>
          <span className="font-semibold leading-6 sm:leading-10 text-lg sm:text-3xl text-gray_900_02 text-left tracking-[-1.65px] w-auto">
                        Write your Questions or thoughts
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-start gap-12 sm:gap-32 w-full">
          <ContactForm />
          <div className="flex flex-col items-start justify-start gap-6 w-full sm:w-1/3">
            <h3 className="font-bold leading-10 text-2xl text-gray_900_02 text-left">
                            Others ways to connect
            </h3>
            <div className="flex flex-col items-start justify-start gap-4 w-full">
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="font-semibold leading-4 md:max-w-full max-w-screen-sm not-italic text-gray_600 text-left text-xs">
                                    Sales Enquiries:
                </span>
                <p className="font-normal md:text-xl text-gray_900_02">
                                    Sales@EdgePerformance.io
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="font-semibold leading-4 md:max-w-full max-w-screen-sm not-italic text-[22px] text-gray_600 text-left text-xs">
                                    Customer Support:
                </span>
                <p className="font-normal text-lg text-gray_900_02">
                                    Support@EdgePerformance.io
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="font-semibold leading-4 md:max-w-full max-w-screen-sm not-italic text-gray_600 text-left text-xs">
                                    Address:
                </span>
                <p className="font-normal md:text-xl text-gray_900_02">
                                    8 The Green, Suite B, Dover, DE 19901
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
