import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Jost } from 'next/font/google';
const jost = Jost({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={jost.className}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
