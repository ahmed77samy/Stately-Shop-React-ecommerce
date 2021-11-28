import SecHeader from "shared/components/layout/sec-header"
import ArticleItem from "./article-item"
import {article_items} from "./items"
import { Col, Container, Row } from "react-bootstrap"
import "./styles/article.scss"
import { Link } from "react-router-dom"

function Article () {
    const limited = 3
    // map for article_items to create ArticleItem
    const itemList = article_items.map((item,index) => {
        return index < limited && (
            <Col key={index} xs={12} md={4}>
                <ArticleItem item={item} />
            </Col>
        )
    })

    /**
     * {@inheritdoc}
     */
    return(
        <section className="com--pd article">
            <Container>
                {/*========== sec__header , sec__content ==========*/}
                    <SecHeader 
                        title="latest articles"
                        description="Discover the most outstanding articles in all topics of life."
                        className="header--center"
                    />
                    <div className="sec__content">
                        <Row className="layout--space">
                            {itemList}
                            <Col xs={12}>
                                <Link to="/article-grid" className="mx-auto text--white anchors--reset btn__default btn--primary">discover now</Link>
                            </Col>
                        </Row>
                    </div>
                {/*========== sec__header , sec__content ==========*/}
            </Container>
        </section>
    )
}

export default Article