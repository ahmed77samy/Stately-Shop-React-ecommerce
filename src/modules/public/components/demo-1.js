import Layout from "shared/components/layout/layout"
import Slider from "./slider/slider"
import CollectionTrending from "modules/shop/components/collections/collection-trending"
import Product from "modules/shop/components/products/product"
import ProductSale from "modules/shop/components/products/product-sale"
import Clients from "./clients/clients"
import Article from "modules/public/components/atricles/article"
import ProductFeatured from "modules/shop/components/products/product-featured"
import { useEffect } from "react"
import { title } from "core/meta-data"

function Demo () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / Home Page")
        }
        return () => isMounted = false;
    },[])
    
    /**
     * {@inheritdoc}
     */
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