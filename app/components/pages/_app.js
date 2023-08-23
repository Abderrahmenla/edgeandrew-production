import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
                html {
                    font-family: ${jost.style.fontFamily};
                }
            `}</style>
      <Component {...pageProps} />
    </>
  );
}
