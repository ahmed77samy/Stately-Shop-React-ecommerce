import { Col, Container, Row } from "react-bootstrap"
import photo1 from "assets/images/story/1.jpg"
import photo2 from "assets/images/story/2.jpg"
import photo3 from "assets/images/story/3.jpg"
import { Link } from "react-router-dom"
import "./styles/story.scss"

function Story () {
    return (
        <section className="com--pd story">
            <Container>
                {/*========== first grid ==========*/}
                <Row noGutters className="layout--space align-items-center">
                    <Col xs={12} md={6}>
                        <img src={photo1} alt="story" className="w-100" />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="sec__content">
                            <span className="text-uppercase text--primary--500">for every one</span>
                            <h3 className="text-uppercase h1">general mode</h3>
                            <p>This striking collection is an inspiring take on the shape of the initial letter adding a touch of modern luxury</p>
                            <Link to="/shop/banner-sidebar" className="anchors--reset btn__default btn--primary text--white">shop now</Link>
                        </div>
                    </Col>
                    {/*========== first grid ==========*/}
                    {/*========== second grid ==========*/}
                    <Col xs={12} md={6}>
                        <div className="sec__content">
                            <span className="text-uppercase text--primary--500">for every one</span>
                            <h3 className="text-uppercase h1">general mode</h3>
                            <p>This striking collection is an inspiring take on the shape of the initial letter adding a touch of modern luxury</p>
                            <Link to="/shop/banner-sidebar" className="anchors--reset btn__default btn--primary text--white">shop now</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={photo2} alt="story" className="w-100" />
                    </Col>
                    {/*========== second grid ==========*/}
                    {/*========== third grid ==========*/}
                    <Col xs={12} md={6}>
                        <img src={photo3} alt="story" className="w-100" />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="sec__content">
                            <span className="text-uppercase text--primary--500">for every one</span>
                            <h3 className="text-uppercase h1">general mode</h3>
                            <p>This striking collection is an inspiring take on the shape of the initial letter adding a touch of modern luxury</p>
                            <Link to="/shop/banner-sidebar" className="anchors--reset btn__default btn--primary text--white">shop now</Link>
                        </div>
                    </Col>
                </Row>
                {/*========== third grid ==========*/}
            </Container>
        </section>
    )
}

export default Story