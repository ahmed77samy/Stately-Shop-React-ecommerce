import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import ProductSingleLayout from "./product-single-layout/product-single-layout"

function ProductSingle(props) {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / Product Single")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return(
        <Layout>
            <div id="shop__page">
                <ProductSingleLayout id={props.props.match.params.id} />
            </div>
        </Layout>
    )
}

export default ProductSingle