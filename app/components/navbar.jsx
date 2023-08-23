import Image from 'next/image';
import Button from './button';
import MenuHeader from './menu-header';
import { fetchGraphQL } from '../utils';

export default async function Navbar() {
  const query = `
    query {
      header (id: "5x0FhZfFZPCa7IRFV1SolX") {
        logo{
          url
          width
          height
        }
        ctaButton {
          text
          url
        }
        contactButton{
          text
          url
        }
        navigationMenuCollection{
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
    <>
      <header className="bg-indigo_900_ed flex items-center justify-center sticky top-0 z-10 h-20 w-full">
        <div className="flex items-center justify-between w-[80%] mx-auto">
          <div className="flex items-center justify-center gap-12">
            <div className="logo">
              <Image
                className="mx-auto"
                src={data.data.header.logo.url}
                alt={'logo'}
                width={data.data.header.logo.width}
                height={data.data.header.logo.height}
                priority
              />
            </div>
            <MenuHeader
              navLinks={
                data.data.header.navigationMenuCollection.items
              }
            />
          </div>

          <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-6">
            <div className="flex items-center justify-start gap-2">
              <Image
                src="/images/country.svg"
                height={22}
                width={22}
                className="h-[22px] w-[22px]"
                alt="computer"
              />
              <div className="flex flex-row gap-0.5 items-center justify-start self-stretch w-auto">
                <p
                  className={'font-normal not-italic text-left text-sm text-white w-auto'}
                >
                                    En
                </p>
                <Image
                  src="/icons/arrow-down.svg"
                  height={4}
                  width={7}
                  alt="vector"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button
                url={data.data.header.contactButton.url}
                textColor={'white'}
                className={
                  'bg-indigo_900_ed border border-white h-5'
                }
                text={data.data.header.contactButton.text}
              />
              <Button
                url={data.data.header.ctaButton.url}
                textColor={'black'}
                className={'bg-amber_A400 h-8'}
                text={data.data.header.ctaButton.text}
              />
            </div>
          </div>
          <div className="block sm:hidden">
            <Image
              className="mx-auto"
              src={'/icons/hamburger-menu.svg'}
              alt={'hamburger menu'}
              width={36}
              height={36}
              priority
            />
          </div>
        </div>
      </header>
    </>
  );
}
