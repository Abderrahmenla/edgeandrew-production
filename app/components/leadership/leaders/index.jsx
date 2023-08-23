import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Leaders({ leaders, sectionTitle }) {
  return (
    <section className="bg-white flex items-center justify-center w-full ">
      <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start w-full gap-12 sm:gap-10 my-14 mx-8 sm:mb-20 sm:mt-32 2xl:mx-64">
        <h2 className="font-medium leading-9 sm:leading-[70px] sm:max-w-full max-w-screen-sm sm:text-6xl text-2xl text-gray_900_02 text-center sm:text-left">
          {sectionTitle}
        </h2>
        <div className="flex flex-col items-center justify-start w-full gap-10">
          {leaders.map((leader, index) => (
            <div
              className="flex flex-col items-center justify-start gap-10"
              key={index}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between sm:min-h-[310px] w-full gap-6 sm:gap-28">
                <div className="flex flex-col items-center sm:flex-row sm:items-start justify-start sm:min-w-[648px] self-stretch gap-4 sm:gap-7">
                  <div className="w-[315px] sm:w-[310px] sm:h-full">
                    <Image
                      src={leader.avatar.image.url}
                      alt={leader.avatar.imageAlt}
                      height={leader.avatar.image.height}
                      width={leader.avatar.image.width}
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg h-full w-full justify-center"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start w-full sm:max-w-[310px] gap-2">
                    <span className="font-bold leading-6 sm:leading-10 md:max-w-full max-w-screen-sm text-xl sm:text-3xl text-gray_900_02 text-left">
                      {leader.name}
                    </span>
                    <p className="font-normal leading-7 max-w-[280px] not-italic text-gray_600 text-left text-lg sm:text-xl mb-4">
                      {leader.position}
                    </p>
                    <div className="flex justify-start items-start gap-4 w-full">
                      <a
                        href={
                          leader.socialLinksCollection
                            .items[0].url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={
                            '/icons/social-media/LinkedIn.svg'
                          }
                          alt={'LinkedIn'}
                          width={35}
                          height={35}
                        />
                      </a>
                      <a
                        href={
                          leader.socialLinksCollection
                            .items[1].url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={
                            '/icons/social-media/Instagram.svg'
                          }
                          alt={'Instagram'}
                          width={35}
                          height={35}
                        />
                      </a>
                      <a
                        href={
                          leader.socialLinksCollection
                            .items[2].url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={
                            '/icons/social-media/Twitter.svg'
                          }
                          alt={'Twitter'}
                          width={35}
                          height={35}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-start max-w-[315px] sm:max-w-[530px]">
                  <p className="font-normal leading-[22px] not-italic text-gray_600 text-left text-base w-full">
                    {
                      leader.description.json.content[0]
                        .content[0].value
                    }
                  </p>
                </div>
              </div>
              <div
                className={`${
                  index === leaders.length - 1 ? 'hidden' : ''
                } border-t border-blue_gray_100 w-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Leaders.propTypes = {
  leaders: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          height: PropTypes.number.isRequired,
          width: PropTypes.number.isRequired,
        }).isRequired,
        imageAlt: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      description: PropTypes.shape({
        json: PropTypes.shape({
          content: PropTypes.arrayOf(
            PropTypes.shape({
              content: PropTypes.arrayOf(
                PropTypes.shape({
                  value: PropTypes.string.isRequired,
                })
              ).isRequired,
            })
          ).isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
  sectionTitle: PropTypes.string.isRequired,
};
