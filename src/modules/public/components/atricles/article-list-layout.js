import { Col, Container, Row } from "react-bootstrap"
import LayoutAside from "./layout-aside"
import LayoutContentList from "./layout-content-list"
import "./styles/articles-list.scss"

function ArticleListLayout () {
    return (
        <section className="com--pd article__list__layout">
            <Container>
                <Row className="layout--space">
                    <Col xs={12} lg={8} xl={9}>
                        <LayoutContentList />
                    </Col>
                    <Col xs={12} lg={4} xl={3}>
                        <LayoutAside />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ArticleListLayout