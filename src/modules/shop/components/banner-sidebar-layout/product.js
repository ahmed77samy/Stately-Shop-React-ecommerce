import shop from "modules/shop/shop"
import { useEffect, useState, Fragment } from "react"
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import BorderLoading from "shared/components/elements/border-loading"
import ProductItem from "../products/product-item"
import ProductItemList from "../products/product-item-list"

function Product (props) {
    let limited = 12
    const [limit , setLimit] = useState(limited)
    const products = useSelector(state => state.shopReducer.products)
    let sort = props.sort
    let visible = props.visible

    // set limit state to show more items
    const handleClick = () => {
        if(!(limit > products.length)) {
            return setLimit(limit => limit + limited)
        }
    }

    /**
     * sort array for the given value
     * @param {array} array 
     * @returns {array}
     */
    const sorting = (array) => {
        const values = [
            {sort: "newest", key: "id" , fr: 1 , lr: -1},
            {sort: "oldest", key: "id" , fr: -1 , lr: 1},
            {sort: "rate_highest", key: "pro_rate" , fr: 1 , lr: -1},
            {sort: "rate_lowest", key: "pro_rate" , fr: -1 , lr: 1},
            {sort: "price_highest", key: "price" , fr: 1 , lr: -1},
            {sort: "price_lowest", key: "price" , fr: -1 , lr: 1},
        ]
        const sortValues = (arr, key, fr, lr) => {
            return arr.sort((a , b) => {
                if(a[key] < b[key]) return fr
                if(a[key] > b[key]) return lr
                return 0
            })
        }
        values.forEach((v) => {
            if(sort === v.sort) {
                let result = sortValues(array, v.key, v.fr, v.lr)
                return result
            }
        })
        return array
    }

    // map for items to create item product
    const itemsList = products && sorting(products).map((item , index) => {
        return (
            index < limit &&
            <Fragment key={index}>
                {
                    visible === "list" ? 
                    <Col xs={12}>
                        <ProductItemList item={item} />
                    </Col>
                    :
                    <Col xs={12} sm={6} xl={3}>
                        <ProductItem item={item} />
                    </Col> 
                }
            </Fragment>
        )
    })

    // fetch the products from Shop
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            shop.getProducts()
        }
        return () => isMounted = false;
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    /**
     * {@inheritdoc}
     */
    return(
        <div className="product__list">
            <Row className="layout--space--20">
                {
                    // check products to previews
                    products === null ? <Col xs={12}><BorderLoading /></Col> :
                    (products === undefined || products.length === 0) ? <Col xs={12}><h2 className="text-center text--typo">No Products Found !</h2></Col> :
                    products && itemsList
                }
            </Row>
            {products && products.length > 0 && limit < products.length && <button className="mx-auto mt-5 btn--reset btn__default btn--primary" onClick={handleClick}>show more</button>}
        </div>
    )
}

export default Product