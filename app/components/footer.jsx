import Image from 'next/image';
import Link from 'next/link';
import { fetchGraphQL } from '../utils';

const Footer = async () => {
  const query = `
  query {
    footer(id: "3ZKR8ZWL8nOxtl2TdzOReb"){
      logo{
        url
        width
        height
      }
      navigationMenuCollection{
        items{
          text
          url
        }
      }
      infoMenuCollection{
        items{
          text
          url
        }
      }
      socialLinksCollection{
        items{
          text
          url
        }
      }
    }
  }
  `;
  const data = await fetchGraphQL(query);
  return (
    <footer className="bg-black_900_01 flex flex-col items-center justify-center p-6 sm:px-5 w-full">
      <div className="flex flex-col items-start justify-start sm:items-center sm:justify-center mt-11 w-full sm:w-4/5">
        <div className="flex flex-col gap-10 items-center justify-center w-full">
          <div className="flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between w-full gap-10 sm:gap-0">
            <div className="flex flex-col items-start justify-start gap-4 sm:gap-6">
              <div className="flex flex-col items-start gap-8 justify-start">
                <Image
                  src={data.data.footer.logo.url}
                  height={47}
                  width={174}
                  alt="logo"
                />
                <p className="font-bold text-base text-left text-white_A700 w-auto">
                                    Listen To Our Podcast
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <Image
                  src="/images/spotify.svg"
                  height={34}
                  width={112}
                  alt="frame6625"
                />
                <Image
                  src="/images/apple.svg"
                  height={34}
                  width={180}
                  alt="frame6625"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-10 sm:gap-20">
              <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                <p
                  href="/navigation"
                  className="font-normal not-italic text-blue_gray_700 text-left text-sm tracking-[0.28px] w-auto"
                >
                                    Navigation
                </p>
                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
                  {data.data.footer.navigationMenuCollection.items.map(
                    (navItem, index) => (
                      <Link
                        key={index}
                        href={navItem.url}
                        className="font-normal not-italic text-base text-left text-white_A700 tracking-[0.32px] w-auto"
                      >
                        {navItem.text}
                      </Link>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                <p className="font-normal not-italic text-blue_gray_700 text-left text-sm tracking-[0.28px] w-auto">
                                    Info
                </p>
                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
                  {data.data.footer.infoMenuCollection.items.map(
                    (navItem, index) => (
                      <Link
                        key={index}
                        href={navItem.url}
                        className="font-normal not-italic text-base text-left text-white_A700 tracking-[0.32px] w-auto"
                      >
                        {navItem.text}
                      </Link>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                <p className="font-normal not-italic text-blue_gray_700 text-left text-sm tracking-[0.28px] w-auto">
                                    Social Links
                </p>
                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
                  {data.data.footer.socialLinksCollection.items.map(
                    (navItem, index) => (
                      <Link
                        key={index}
                        href={navItem.url}
                        className="font-normal not-italic text-base text-left text-white_A700 tracking-[0.32px] w-auto"
                      >
                        {navItem.text}
                      </Link>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                <p className="font-normal not-italic text-blue_gray_700 text-left text-sm tracking-[0.28px] w-auto">
                                    Download App
                </p>
                <div className="flex flex-col gap-[19px] items-start justify-start self-stretch w-auto">
                  <Image
                    height={48}
                    width={167}
                    src="/images/googleplay.svg"
                    alt="googleplay_One"
                  />
                  <Image
                    height={48}
                    width={167}
                    src="/images/appstore.svg"
                    alt="appstore_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="bg-gray_900_04 h-px w-full" />
            <div className="flex flex-col item-start sm:flex-row sm:items-center justify-between w-full gap-4 sm:gap-10">
              <p className="font-normal not-italic text-blue_gray_700_01 text-left text-sm w-auto">
                                All right reserved {new Date().getFullYear()} -
                                Developed By{' '}
                <a
                  href="https://www.abderrahmenlh.com"
                  target="_blank"
                >
                                    Abderrahmen
                </a>
              </p>
              <div className="flex flex-col sm:flex-row items-start justify-start sm:items-center sm:justify-center sm:gap-6">
                <p className="uppercase font-normal not-italic text-blue_gray_700_01 text-left text-sm w-auto">
                                    PRIVACY POLICY & COOKIES
                </p>
                <div
                  href="/policy"
                  className="hidden sm:block font-normal not-italic text-blue_gray_700_01 text-left text-sm w-auto"
                >
                                    /
                </div>
                <Link
                  href="/terms-of-service"
                  className="uppercase font-normal not-italic text-blue_gray_700_01 text-left text-sm w-auto"
                >
                                    TERMS & CONDITIONS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
