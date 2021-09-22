import FooterReference from "./footer-reference"
import FooterService from "./footer-service"
import "./styles/footer.scss"

function Footer () {
    return (
        <footer>
            <FooterService />
            <FooterReference />
        </footer>
    )
}

export default Footer