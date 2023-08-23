import Image from 'next/image';

export default function Download() {
  return (
    <section className="relative flex flex-col items-center justify-end w-full h-[75vh] gap-10">
      <div className="absolute top-[-125px] sm:top-[-250px] left-50 mx-4 sm:mx-0 xl:w-[622px] xl:h-[582px] 2xl:w-auto 2xl:h-auto ">
        <Image
          src={'/images/organization/mobiles.webp'}
          className="object-cover max-w-full max-h-full"
          alt={'coaches'}
          width={1022}
          height={582}
        />
      </div>
      <div className="bg-white flex flex-col items-center justify-center gap-10 w-full sm:mx-[555px] mb-28">
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="font-bold text-base text-blue_900_01 text-left">
                        Download
          </span>
          <h2 className="font-medium leading-[60px] max-w-[700px]  md:text-[46px] text-5xl text-black text-center">
                        Your Dedicated Mental Training Partner
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 sm:gap-2">
          <Image
            height={104}
            width={163}
            src="/images/googleplay.svg"
            alt="googleplay_One"
          />
          <Image
            height={104}
            width={163}
            src="/images/appstore.svg"
            alt="appstore_One"
          />
        </div>
      </div>
    </section>
  );
}
