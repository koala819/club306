import Footer from "./Footer";
import Header from "./Header";
import Adhesion from "./Adhesion";


const Layout = ({content} : LayoutProps) => {
console.log(content)
    return (
        <div>
            <Header />
            <Adhesion title={content.adhesionTitle} txtBtn={content.adhesionTxtBtn} />



            <Footer />
        </div>
    )

}
export interface LayoutProps {
    content: any;
}
export default Layout;