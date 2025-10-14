import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default GeneralLayout;