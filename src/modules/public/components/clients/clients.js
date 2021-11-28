import SecHeader from "shared/components/layout/sec-header"
import Sponsers from "./sponsers"
import Reviews from "./reviews.js"
import { Col, Row } from "react-bootstrap"
import "./styles/clients.scss"

function Clients () {
    /**
     * {@inheritdoc}
     */
    return (
        <section className="com--pd clients">
            <div className="container">
                {/*========== SecHeader ==========*/}
                <SecHeader 
                    title="reviews & sponsers"
                    description="discover more than 2000 products"
                />
                {/*========== SecHeader ==========*/}
                {/*========== sec__content ==========*/}
                <div className="sec__content">
                    <Row className="layout--space">
                        <Col xs={12}>
                            <Reviews />
                        </Col>
                        <Col xs={12}>
                            <Sponsers />
                        </Col>
                    </Row>
                </div>
                {/*========== sec__content ==========*/}
            </div>
        </section>
    )
}

export default Clients