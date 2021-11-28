import ProductFeaturedLayout from "./product-featured-layout"
import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import "./styles/product-featured.scss"

function ProductFeatured () {
    const products = useSelector(state => state.shopReducer.products)

    /**
     * {@inheritdoc}
     */
    return (
        <section className="com--pd product__featured">
            <Container>
                {/*========== sec__content ==========*/}
                <div className="sec__content">
                    <Row className="layout--space">
                        <Col xs={12} md={6} lg={3}>
                            <ProductFeaturedLayout items={products} title="best of the week" />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ProductFeaturedLayout items={products} title="best of the month" />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ProductFeaturedLayout items={products} title="sale porduct" />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ProductFeaturedLayout items={products} title="Popular" />
                        </Col>
                    </Row>
                </div>
                {/*========== sec__content ==========*/}
            </Container>
        </section>
    )
}

export default ProductFeatured