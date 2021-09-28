import Logo from "../elements/logo"
import { PhoneIcon , EmailIcon , LocationIcon, GoogleIcon, TwitterIcon, FacebookIcon } from "../elements/icons";
import { Link } from "react-router-dom";

function FooterAbout () {
    return (
        <div className="footer__about">
            <Logo className="mb-4" foreground="light" />
            <ul className="list-unstyled m-0">
                <li>
                    <label><PhoneIcon /></label> <a href="tel:9988776655" className="anchors--reset">9988776655</a>
                </li>
                <li>
                    <label><EmailIcon /></label><a href="mailto:info@gmail.com" className="anchors--reset">info@gmail.com</a>
                </li>
                <li>
                    <label><LocationIcon /></label>4005, Silver Business Point India
                </li>
                <div className="social">
                    <Link className="anchors--reset btn__icon btn--small google" to="/">
                        <GoogleIcon className="icon" />
                    </Link>
                    <Link className="anchors--reset btn__icon btn--small twitter" to="/">
                        <TwitterIcon className="icon" />
                    </Link>
                    <Link className="anchors--reset btn__icon btn--small facebook" to="/">
                        <FacebookIcon className="icon" />
                    </Link>
                </div>
            </ul>
        </div>
    )
}

export default FooterAbout