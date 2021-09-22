import {product_items} from "items"
import { Col, Container, Row } from "react-bootstrap"
import SecHeader from "shared/components/layout/sec-header"
import ProductItem from "./product-item"
import "./styles/product.scss"

function Product () {
    let limited = 8

    /**
     * map for items to create item product
     */
    const itemsList = product_items.map((item , index) => {
        return (
            index < limited && 
            <Col xs={12} sm={6} lg={3} key={index}>
                <ProductItem item={item} />
            </Col>
        )
    })

    /**
     * {@inheritdoc}
     */
    return(
        <section className="product com--pd">
            <Container>
                {/*========== SecHeader ==========*/}
                <SecHeader 
                    title="top products"
                    description="discover more than 2000 products"
                />
                {/*========== SecHeader ==========*/}
                {/*========== sec__content ==========*/}
                <div className="sec__content">
                    <Row className="layout--space">
                        {itemsList}
                    </Row>
                </div>
                {/*========== sec__content ==========*/}
            </Container>
        </section>
    )
}

export default Product