
import { Montserrat } from "next/font/google";
import Header from "@/components/global/header/Header";
import { globalMock } from "@/mocks/globals";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ContactLayout({ children }) {
    const global = globalMock;

    return (
        <div className={`${montserrat.variable} page`}>
            <div className="pageWrapper">
                <Header data={global?.Header?.[0] || global?.Header || null} />
                {children}
            </div>
        </div>
    );
}
