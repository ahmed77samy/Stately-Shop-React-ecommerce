import { Col, Container, Row } from "react-bootstrap"
import CopyRight from "./copy-right"
import FooterAbout from "./footer-about"
import FooterLinks from "./footer-links"

function FooterReference () {
    return(
        <section className="dark--mode com--pd">
            <Container>
                <Row className="layout--space">
                    <Col xs={12} lg={4}>
                        <FooterAbout />
                    </Col>
                    <Col xs={12} lg={8}>
                        <FooterLinks />
                        <div className="bg--neutral--700 hr--1 hr--after my-4"></div>
                        <CopyRight />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FooterReference