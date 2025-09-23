import './globals.scss';
import { Montserrat } from "next/font/google";
// import { getGlobal } from '@/lib/global';
import Header from '@/components/global/header/Header';
import Footer from '@/components/global/footer/Footer';
import { globalMock } from '@/mocks/globals';
export const revalidate = 60;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({ children }) {
  // const global = await getGlobal();
  const global = globalMock;
  
  
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <div className='pageWrapper'>
          <Header data={global?.Header?.[0] || global?.Header || null} />
          {children}
          <Footer data={global?.Footer?.[0] || global?.Footer || null} />
        </div>
      </body>
    </html>
  );
}
