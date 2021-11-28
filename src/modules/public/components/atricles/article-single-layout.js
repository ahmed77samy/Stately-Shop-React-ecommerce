import { Col, Container, Row } from "react-bootstrap"
import LayoutAside from "./layout-aside"
import LayoutContentSingle from "./layout-content-single"
import "./styles/article-single.scss"

function ArticleSingleLayout () {
    return (
        <section className="com--pd article__single__layout">
            <Container>
                <Row className="layout--space">
                    <Col xs={12} lg={8} xl={9}>
                        <LayoutContentSingle />
                    </Col>
                    <Col xs={12} lg={4} xl={3}>
                        <LayoutAside />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ArticleSingleLayout