import logowhite from "../../../assets/images/logo white.png"
import logoblack from "../../../assets/images/logo black.png"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function Logo (props) {
    let {foreground , className} = props
    return(
        <div className={`logo ${className}`}>
            <Link to="/" className="anchors--reset">
                <img src={foreground === "light" ? logowhite : logoblack} alt="logo" />
            </Link>
        </div>
    )
}

Logo.propTypes = {
    foreground: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string
};

export default Logo