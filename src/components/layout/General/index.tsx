import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import TopStrip from "../../shared/TopStrip";
// import Bots from "../../shared/CTA/Bots";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <TopStrip />
            <main>{children}</main>
            <Footer />
            {/* <Bots /> */}
        </div>
    );
};

export default GeneralLayout;