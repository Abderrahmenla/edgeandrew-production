import Image from 'next/image';

export default function DownloadFeaturesSection() {

  return (
    <section className="bg-gradient flex flex-col items-center justify-start h-[312px] sm:h-[549px] w-full">
      <div
        className="bg-cover bg-no-repeat flex flex-col items-center justify-center h-full w-full"
        style={{
          backgroundImage: 'url(\'images/horizontal-stroke.svg\')',
        }}
      >
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-10 w-full m-auto sm:max-h-[35%] sm:max-w-[43%]">
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 w-full">
            <span className="font-bold text-base text-amber_A400 text-left">
                            Download
            </span>
            <h2 className="font-medium leading-8 sm:leading-[60px] md:max-w-full max-w-[84%]  text-2xl sm:text-5xl text-white text-center sm:text-left">
                            Master Your Mind With Edgee
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
      </div>
    </section>
  );
}
