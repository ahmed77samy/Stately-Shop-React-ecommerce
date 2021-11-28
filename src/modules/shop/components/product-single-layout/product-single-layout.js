import { useState } from "react"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { CartIcon, HomeIcon } from "shared/components/elements/icons"
import BreadCrumb from "shared/components/layout/bread-crumb"
import Card from "shared/components/layout/card"
import ShopApi from "../../services/api"
import ProductRelated from "../products/product-related"
import ProductTab from "./product-tab"
import ProductView from "./product-view"
import PropTypes from "prop-types"
import "./styles/product-single-layout.scss"
import BorderLoading from "shared/components/elements/border-loading"

function ProductSingleLayout (props) {
    const [item, setItem] = useState(null)

    // fetch the products from ShopAPI 
    useEffect(() => {
        let isMounted = true;
        ShopApi.showProduct(props.id)
        .then(data => {
            if(isMounted) {
                setItem(data.data.payload)
            }
        })
        .catch(() => {
            if(isMounted) {
                setItem(undefined)
            }
        })
        return () => isMounted = false;
    },[props.id])

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
            content: item?.pro_name,
            route: "/shop/product-single",
            props: {active: true}
        },
    ]

    return (
        <section className="com--pd product__single__layout">
            <Container>
                <BreadCrumb el={elBreadCrumb} />
                <Card className="layout__card">
                    {
                        item === null ? <div className="text-center"><BorderLoading /></div> :
                        item === undefined ? <h6 className="text-danger m-0">An unexpected error occurred. Please try again soon!</h6> :
                        item && (
                            <>
                                <ProductView item={item} />
                                <ProductTab item={item} id={props.id} />
                                <ProductRelated item={item} />
                            </>
                        )
                    }
                </Card>
            </Container>
        </section>
    )
}


ProductSingleLayout.propTypes = {
    id: PropTypes.string.isRequired
}

export default ProductSingleLayout