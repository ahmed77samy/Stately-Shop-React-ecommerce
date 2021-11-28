import photo1 from "assets/images/bg/1.jpg"
import { Col, Row } from "react-bootstrap"
import Banner from "shared/components/layout/banner"
import Articles from "./articles"

function LayoutContent () {
    return (
        <div className="layout__content">
            <Row className="layout--space">
                <Col xs={12}>
                    <Banner className="dark--mode banner__interface" bg={photo1} alt="shop-banner" width="100%" height={300}>
                        <h5 className="text-uppercase h2">Stately shop</h5>
                        <h2 className="text-capitalize mb-3 h1">our article</h2>
                        <button to="/" className="anchors--reset btn__default btn--light btn--border">discover now</button>
                    </Banner>
                </Col>
                <Col xs={12}>
                    <Articles />
                </Col>
            </Row>
        </div>
    )
}

export default LayoutContent