import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import ArticleItem from "./article-item"
import { article_items } from "./items"

function Articles () {
    let limited = 6
    const [limit , setLimit] = useState(limited)

    /**
     * set limit state to show more items
     * @param {event} e 
     */
    const handleClick = () => {
        if(!(limit > article_items.length)) {
            return setLimit(limit => limit + limited)
        }
    }

    // map for article_items to create ArticleItem
    const itemList = article_items.map((item,index) => {
        return index < limit && (
            <Col key={index} xs={12} md={4}>
                <ArticleItem item={item} />
            </Col>
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="articles__list">
            <Row className="layout--space--20">
                {itemList}
                {limit < article_items.length && <button to="/" className="mx-auto mt-5 btn--reset btn__default btn--primary" onClick={handleClick}>show more</button>}
            </Row>
        </div>
    )
    
}

export default Articles