import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import SecHeader from "shared/components/layout/sec-header"
import ProductItem from "./product-item"
import { useSelector } from "react-redux"
import BorderLoading from "shared/components/elements/border-loading"
import shop from "modules/shop/shop"
import "./styles/product.scss"

function Product () {
    let limited = 8
    const products = useSelector(state => state.shopReducer.products)

    // fetch the products from Shop
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            shop.getProducts()
        }
        return () => isMounted = false;
    },[])// eslint-disable-line react-hooks/exhaustive-deps


    // map for items to create item product
    const itemList = products?.map((item , index) => {
        return (
            index < limited && 
            <Col xs={12} sm={6} lg={3} key={index}>
                <ProductItem item={item} />
            </Col>
        )
    })

    /**
     * {@inheritdoc}
     */
    return(
        <section className="product com--pd">
            <Container>
                {/*========== SecHeader ==========*/}
                <SecHeader 
                    title="top products"
                    description="discover more than 2000 products"
                />
                {/*========== SecHeader ==========*/}
                {/*========== sec__content ==========*/}
                <div className="sec__content">
                    <Row className="layout--space">
                        {
                            // check products to previews
                            products === null ? <BorderLoading /> :
                            products === undefined ? <Col xs={12}><h6 className="text-danger m-0">No Products Found !</h6></Col> :
                            products && itemList
                        }
                        {
                            // check products to previews
                            products && 
                            <Col xs={12}>
                                <Link to="/shop/banner-sidebar" className="mx-auto text--white anchors--reset btn__default btn--primary">show more</Link>
                            </Col>
                        }
                    </Row>
                </div>
                {/*========== sec__content ==========*/}
            </Container>
        </section>
    )
}

export default Product