import Layout from "shared/components/layout/layout"
import Slider from "./slider/slider"
import CollectionTrending from "modules/shop/components/collections/collection-trending"
import Product from "modules/shop/components/products/product"
import ProductSale from "modules/shop/components/products/product-sale"
import Clients from "./clients/clients"
import Article from "modules/public/components/atricles/article"
import ProductFeatured from "modules/shop/components/products/product-featured"

function Demo () {
    return (
        <Layout>
            <div id="demo__page">
                <Slider />
                <CollectionTrending />
                <Product />
                <ProductSale />
                <Article />
                <Clients />
                <ProductFeatured />
            </div>
        </Layout>
    )
}

export default Demo