import Layout from "shared/components/layout/layout"
import ProductSingleLayout from "./product-single-layout/product-single-layout"

function ProductSingle(props) {
    return(
        <Layout>
            <div id="shop__page">
                <ProductSingleLayout id={props.props.match.params.id} />
            </div>
        </Layout>
    )
}

export default ProductSingle