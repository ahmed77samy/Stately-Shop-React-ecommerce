import Footer from "../footer/footer"
import Header from "../header/header"
import PropTypes from 'prop-types';
import "./styles/layout.scss"

function Layout (props) {
    return(
        <div id="main">
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout