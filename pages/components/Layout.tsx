import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import PropTypes from "prop-types";


const Layout = ({content}: any) => {
console.log(content)
    return (
        <div>
            <Header />
            <Body content={content} />
            <Footer />
        </div>
    )

}
Layout.propTypes = {
    content: PropTypes.objectOf(PropTypes.string).isRequired,
}
export default Layout;