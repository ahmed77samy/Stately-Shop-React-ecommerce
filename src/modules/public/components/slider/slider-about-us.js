import { Col, Container, Row } from "react-bootstrap"
import Banner from "shared/components/layout/banner"
import SecHeader from "shared/components/layout/sec-header"
import photo from "assets/images/bg/3.jpg"
import "./styles/slider-about-us.scss"

function SliderAboutUs () {
    return (
        <section className="com--pd slider__about__us">
            <Container>
                {/*========== SecHeader ==========*/}
                <SecHeader
                    title="about us our shop"
                    className="header--center"
                />
                {/*========== SecHeader ==========*/}
                {/*========== sec__content ==========*/}
                <div className="sec__content">
                    <Row className="layout--space">
                        <Col xs={12} md={6}>
                            <h2 className="h1 text-uppercase">Style is a way to say who you are without having to speak</h2>
                        </Col>
                        <Col xs={12} md={6}>
                            <h6 className="text-uppercase">Fashion has always been so temporary and uncertain.</h6>
                            <p>You can’t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies. Obviously, there is nothing wrong about it because fashion satisfies our willingness to be attractive. And also fashion is the detector of prosperity and social rank.</p>
                        </Col>
                        <Col xs={12}>
                            <Banner bg={photo} alt="about-us" height="auto" />
                        </Col>
                    </Row>
                </div>
                {/*========== sec__content ==========*/}
            </Container>
        </section>
    )
}

export default SliderAboutUs