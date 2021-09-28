import BreadCrumb from "shared/components/layout/bread-crumb"
import Layout from "shared/components/layout/layout"
import ProductSingleLayout from "./product-single-layout/product-single-layout"
import { CartIcon, HomeIcon } from "shared/components/elements/icons"

function ProductSingle() {

    // items BreadCrumb
    const elBreadCrumb = [
        {
            content: "home",
            icon: HomeIcon,
            route: "/demo1",
        },
        {
            content: "shop",
            icon: CartIcon,
            route: "/shop",
        },
        {
            content: "product item",
            route: "/shop/product-single",
            props: {active: true}
        },
    ]

    /**
     * {@inheritdoc}
     */
    return(
        <Layout>
            <div id="shop__page">
                <BreadCrumb el={elBreadCrumb} />
                <ProductSingleLayout />
            </div>
        </Layout>
    )
}

export default ProductSingle