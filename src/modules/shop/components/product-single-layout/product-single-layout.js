import { product_items } from "items"
import { Container } from "react-bootstrap"
import Card from "shared/components/layout/card"
import ProductRelated from "../products/product-related"
import ProductTab from "./product-tab"
import ProductView from "./product-view"
import "./styles/product-single-layout.scss"

function ProductSingleLayout () {
    return (
        <section className="com--pd product__single__layout">
            <Container>
                <Card className="layout__card">
                    <ProductView item={product_items[3]} />
                    <ProductTab item={product_items[3]} />
                    <ProductRelated />
                </Card>
            </Container>
        </section>
    )
}

export default ProductSingleLayout