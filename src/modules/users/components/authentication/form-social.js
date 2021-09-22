import { FacebookIcon, GoogleIcon, TwitterIcon } from "shared/components/elements/icons"
import { Link } from "react-router-dom"

function FormSocial () {
    /**
     * {@inheritdoc}
     */
    return (
        <div className="form__social">
            <Link className="anchors--reset btn__icon google" to="/">
                <GoogleIcon className="icon" />
            </Link>
            <Link className="anchors--reset btn__icon twitter" to="/">
                <TwitterIcon className="icon" />
            </Link>
            <Link className="anchors--reset btn__icon facebook" to="/">
                <FacebookIcon className="icon" />
            </Link>
        </div>
    )
}

export default FormSocial