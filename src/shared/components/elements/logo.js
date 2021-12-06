import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import "./styles/logo.scss"

function Logo (props) {
    let {foreground , className} = props
    return(
        <div className={`logo ${className} ${foreground === "light" ? 'light' : 'dark'}`}>
            <Link to="/" className="anchors--reset">
                <h2 className="text-uppercase m-0">Stately</h2>
                <span className={foreground === 'light' ? "text--neutral--300" : "text--neutral--700"}>ecommerce Shop</span>
            </Link>
        </div>
    )
}

Logo.propTypes = {
    foreground: PropTypes.oneOf(['light', 'dark']).isRequired,
    className: PropTypes.string
};

export default Logo