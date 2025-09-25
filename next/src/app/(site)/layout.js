import Header from "@/components/global/header/Header";
import Footer from "@/components/global/footer/Footer";
import { globalMock } from "@/mocks/globals";

export default function SiteLayout({ children }) {
    const global = globalMock;
    return (
        <div className="pageWrapper">
            <Header data={global?.Header?.[0] || global?.Header || null} />
            {children}
            <Footer data={global?.Footer?.[0] || global?.Footer || null} />
        </div>
    );
}
