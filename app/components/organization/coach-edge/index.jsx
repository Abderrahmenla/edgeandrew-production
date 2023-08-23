import Image from 'next/image';

export default function CoachEdge() {
  return (
    <section className="relative overflow-hidden bg-gradient flex flex-col sm:flex-row sm:items-center sm:justify-start w-full min-h-screen">
      <div className="hidden sm:block sm:absolute xl:top-[-80px] 2xl:top-[-20px] sm:left-0">
        <Image
          src={'/images/chevron.svg'}
          className="object-cover max-w-full max-h-full"
          alt={'chevron'}
          width={746}
          height={644}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-start w-full sm:w-[76%] mx-auto mt-16 sm:mt-32 mb-40 sm:ml-72 xl:mb-[350px] 2xl:mb-[550px] gap-8 sm:gap-16">
        <div className="flex flex-col items-center justify-center h-96 w-80 mx-auto sm:h-[792px] sm:w-[629px]">
          <Image
            src={'/images/organization/coaches.webp'}
            className="object-cover max-w-full max-h-full"
            alt={'coaches'}
            width={629}
            height={792}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-80 mx-auto sm:w-1/2 gap-2 sm:gap-4">
          <span className="font-bold text-amber_A400 text-base text-left w-auto">
                        For Coaches
          </span>
          <div className="flex flex-col items-start justify-start gap-4 sm:gap-6">
            <h2 className="font-medium sm:max-w-full max-w-screen-sm text-2xl sm:text-5xl text-left text-white_A700 sm:leading-[60px]">
                            More touch points, greater impact.
            </h2>
            <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-base sm:text-2xl text-gray_600 text-left">
                            Edge is a routine-based mental skills hub, doubling
                            as a robust and secure content delivery system that
                            standardizes program delivery at scale across your
                            organization. With built in two-way communication,
                            Edge is a force multiplier for coaches that will
                            exponentially increase touch points with your
                            athletes. The ability to add to your current
                            metrics’ regular data about an athlete's trends and
                            mental routine brings a whole new dynamic to
                            performance. Imagine understanding how your
                            athlete’s focus is impacted by training breathwork
                            the night before a game. That could be the
                            difference between good and great, helping create a
                            culture where athletes are encouraged to re-commit
                            daily, feeling more prepared, informed and
                            supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
