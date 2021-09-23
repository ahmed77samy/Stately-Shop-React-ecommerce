import { Col, Container, Row } from "react-bootstrap"
import AsideFilter from "./aside-filter"
import LayoutContent from "./layout-content"
import { Link } from "react-router-dom";

function BannerSidebarLayout () {
    return(
        <section className="com--pd banner__sidebar__layout">
            <Container>
                <Row className="layout--space">
                    <Col lg={4} className="d-none d-lg-block">
                        <AsideFilter />
                    </Col>
                    <Col xs={12} lg={8}>
                        <LayoutContent />
                    </Col>
                    <Col xs={12} lg={{span: 8 , offset: 4}}>
                        <Link to="/" className="mx-auto text--white anchors--reset btn__default btn--primary">show more</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerSidebarLayout