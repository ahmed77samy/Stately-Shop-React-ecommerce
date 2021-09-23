import Slider from "./slider/slider"
import CollectionTrending from "modules/shop/components/collections/collection-trending"
import Product from "modules/shop/components/products/product"
// import Sale from "./sale/sale"
// import Review from "./review/review"
// import Clients from "./clients/clients"
// import Article from "modules/articles/components/atricle/atricle"
// import FeaturedProduct from "modules/shop/components/products/featured-product"

import Layout from "shared/components/layout/layout"

function Demo () {
    return (
        <Layout>
            <div id="demo__page">
                <Slider />
                <CollectionTrending />
                <Product />
                {/* <Sale /> */}
                {/* <Review /> */}
                {/* <Clients /> */}
                {/* <Article /> */}
                {/* <FeaturedProduct /> */}
            </div>
        </Layout>
    )
}

export default Demo