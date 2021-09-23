import { product_items } from "items"
import { Col, Row } from "react-bootstrap"
import ProductItem from "../products/product-item"

function Products () {
    let limited = 9

    // map for items to create item product
    const itemsList = product_items.map((item , index) => {
        return (
            index < limited &&
            <Col xs={12} sm={6} xl={4} key={index}>
                <ProductItem item={item} />
            </Col>
        )
    })

    /**
     * {@inheritdoc}
     */
    return(
        <div className="products__list">
            <Row className="layout--space--20">
                {itemsList}
            </Row>
        </div>
    )
}

export default Products