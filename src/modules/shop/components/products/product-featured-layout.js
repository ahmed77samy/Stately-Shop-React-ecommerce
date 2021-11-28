import React from "react";
import BorderLoading from "shared/components/elements/border-loading";
import Card from "shared/components/layout/card";
import ProductFeaturedItem from "./product-featured-item";

function ProductFeaturedLayout (props) {
    let {items , title} = props
    let limited =  3;

    /**
     * map for items to create item product
     */
    const itemsList = items?.map((item , index) => {
        return index < limited && (
            <ProductFeaturedItem key={index} item={item} />
        )
    })

    return (
        <Card>
            <div className="featured__header">
                <h3 className="text-uppercase h6 m-0">{title}</h3>
            </div>
            <div className="product__featured__layout">
                {
                    items === null ? <div className="text-center"><BorderLoading /></div> :
                    items === undefined ? <h6 className="text-danger m-0">No Products Found !</h6> :
                    items && itemsList
                }
            </div>
        </Card>
    )
}

export default ProductFeaturedLayout