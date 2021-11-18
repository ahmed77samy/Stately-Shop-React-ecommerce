import { useEffect, useState, Fragment } from "react"
import { Col, Row } from "react-bootstrap"
import BorderLoading from "shared/components/elements/border-loading"
import ProductItem from "../products/product-item"
import ShopApi from "../../services/api"
import ProductItemList from "../products/product-item-list"

function ProductSearch (props) {
    let limited = 12
    const [limit , setLimit] = useState(limited)
    const [productssearch , setProductsSearch] = useState(null)
    let sort = props.sort
    let visible = props.visible

     /**
     * set limit state to show more items
     * @param {event} e 
     */
    const handleClick = () => {
        if(!(limit > productssearch.length)) {
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
    const searchItemsList = productssearch && sorting(productssearch).map((item , index) => {
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
            setProductsSearch(null)
            ShopApi.searchProduct(props.key_search)
            .then((data) => {
                setProductsSearch(data.data.payload);
            })
            .catch(() => {
                setProductsSearch(undefined);
            })
        }
        return () => isMounted = false;
    },[props.key_search])// eslint-disable-line react-hooks/exhaustive-deps

    /**
     * {@inheritdoc}
     */
    return(
        <div className="product__list">
            <Row className="layout--space--20">
                {
                    // check products to previews
                    productssearch === null ? <Col xs={12} className="text-center"><BorderLoading /></Col> :
                    (productssearch === undefined || productssearch.length === 0) ? <Col xs={12}><h2 className="text-center text--typo">No Products Found !</h2></Col> :
                    productssearch && searchItemsList
                }
            </Row>
            {productssearch && productssearch.length > 0 && <button to="/" className="mx-auto mt-5 btn--reset btn__default btn--primary" onClick={handleClick}>show more</button>}
        </div>
    )
}

export default ProductSearch