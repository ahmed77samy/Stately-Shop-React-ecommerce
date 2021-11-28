import { Col, Container, Row } from "react-bootstrap"
import SecHeader from "shared/components/layout/sec-header"
import "./styles/facts.scss"

function Facts () {
    return (
        <section className="com--pd facts">
            <Container>
                {/*========== SecHeader ==========*/}
                <SecHeader 
                    title='some facts about us'
                    description="Unlike product and catalog pages, which typically"
                    className="header--center"
                />
                {/*========== SecHeader ==========*/}
                {/*========== SecHeader ==========*/}
                <div className="sec__content">
                    <Row>
                        <Col xs={12} md={3}>
                            <h6>24+</h6>
                            <span className="text-capitalize">team members</span>
                        </Col>
                        <Col xs={12} md={3}>
                            <h6>2010</h6>
                            <span className="text-capitalize">Year founded</span>
                        </Col>
                        <Col xs={12} md={3}>
                            <h6>15k</h6>
                            <span className="text-capitalize">customers</span>
                        </Col>
                        <Col xs={12} md={3}>
                            <h6>$10m</h6>
                            <span className="text-capitalize">In total funding</span>
                        </Col>
                    </Row>                
                </div>
                {/*========== SecHeader ==========*/}
            </Container>
        </section>
    )
}

export default Facts