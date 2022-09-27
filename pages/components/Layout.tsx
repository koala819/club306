import Footer from "./Footer";
import Header from "./Header";
import Adhesion from "./Adhesion";
import Presentation from "./Presentation";

const Layout = ({content} : LayoutProps) => {
console.log(content)
    return (
        <div>
            <Header />
            <Presentation title={content.presentationTitle} txt={content.presentationTxt} txtButton={content.presentationTxtBtn} />
            <Adhesion title={content.adhesionTitle} txtBtn={content.adhesionTxtBtn} />



            <Footer />
        </div>
    )

}
export interface LayoutProps {
    content: any;
}
export default Layout;