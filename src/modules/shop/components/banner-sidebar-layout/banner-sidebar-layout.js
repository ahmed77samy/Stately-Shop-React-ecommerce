import { Col, Container, Row } from "react-bootstrap"
import AsideFilter from "./aside-filter"
import LayoutContent from "./layout-content"
import "./styles/banner-aside-layout.scss"

function BannerSidebarLayout () {
    return(
        <section className="com--pd banner__sidebar__layout">
            <Container>
                <Row className="layout--space">
                    <Col lg={3} className="d-none d-lg-block">
                        <AsideFilter />
                    </Col>
                    <Col xs={12} lg={9}>
                        <LayoutContent />
                    </Col>
                    <Col xs={12} lg={{span: 8 , offset: 4}}>
                        <button to="/" className="mx-auto btn--reset btn__default btn--primary">show more</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerSidebarLayout