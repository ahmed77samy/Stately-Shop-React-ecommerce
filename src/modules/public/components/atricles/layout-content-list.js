import { Col, Row } from "react-bootstrap"
import ArticlesList from "./articles-list"

function LayoutContentList () {
    return (
        <div className="layout__content__list">
            <Row className="layout--space">
                <Col xs={12}>
                    <ArticlesList />
                </Col>
            </Row>
        </div>
    )
}

export default LayoutContentList