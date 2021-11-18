import { FacebookIcon, GoogleIcon, TwitterIcon } from "shared/components/elements/icons"
import ItemContent from "shared/components/layout/item-content"
import { Link } from "react-router-dom"
import ProductViewForm from "./product-view-form"
import ProductStock from "../products/product-stock"
import ProductSalary from "../products/product-salary"
import ProductFiveStars from "../products/product-fivestars"
import ShopApi from "../../services/api"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { FETCH_REVIEWS } from "modules/shop/services/actions"

function ViewContent (props) {
    const dispatch = useDispatch()
    const [category , setCategory] = useState(null)
    const { pro_name, price, sale, pro_rate, id, pro_des, pro_gender, category_id } = props.item
    let reviews = useSelector(state => state.shopReducer.product_reviews)

    // fetch show category from ShopApi
    useEffect(() => {
        let isMounted = true;
        ShopApi.showCategory(category_id)
        .then((data) => {
            if(isMounted){
                setCategory(data.data.payload);
            }
        })
        .catch(() => {
            if(isMounted){
                setCategory(undefined)
            }
        })
        return () => isMounted = false;
    },[category_id])
    
    // detch show reviews from ShopApi
    useEffect(() => {
        let isMounted = true
        ShopApi.ProductReview(id)
        .then((data) => {
            if(isMounted) {
                dispatch(FETCH_REVIEWS(data.data.payload.reverse()))
            }
        })
        .catch(() => {
            if(isMounted) {
                dispatch(FETCH_REVIEWS(undefined))
            }
        })
        return () => isMounted = false;
    },[id, dispatch])// eslint-disable-line react-hooks/exhaustive-deps
    
    /**
     * {@inheritdoc}
     */
    return(
        <div className="view__content">
            <ItemContent>
                {/*========== item ==========*/}
                <div>
                    <span>Code: {id}</span>
                    <h2 className="h4 m-0 mt-1 text-uppercase">{pro_name}</h2>
                </div>
                {/*========== item ==========*/}
                {/*========== item ==========*/}
                <div className="d-flex flex-wrap align-items-center">
                    <ProductSalary className="w-100" sale={sale} salary={price} />
                    <ProductFiveStars className="mr-3" stars={pro_rate} reviews={reviews?.length} />
                    <ProductStock stock={true} />
                </div>
                {/*========== item ==========*/}
                <p>{pro_des}</p>
                <ProductViewForm item={props.item} />
                {/*========== content__ref ==========*/}
                <div className="content__ref">
                    {
                        category !== undefined &&
                        <p>
                            <label className="m-0 d-inline mr-1">category:&nbsp;</label>
                            {category && <span><Link to="/" className="anchors--reset text-capitalize">{category.cat_name}</Link></span>}
                        </p>
                    }
                    <p>
                        <label className="m-0 d-inline mr-1">gender:&nbsp;</label>
                        <span>{pro_gender}</span>
                    </p>
                    <p className="social">
                        <Link className="anchors--reset btn__icon btn--small google" to="/">
                            <GoogleIcon className="icon" />
                        </Link>
                        <Link className="anchors--reset btn__icon btn--small twitter" to="/">
                            <TwitterIcon className="icon" />
                        </Link>
                        <Link className="anchors--reset btn__icon btn--small facebook" to="/">
                            <FacebookIcon className="icon" />
                        </Link>
                    </p>
                </div>
                {/*========== content__ref ==========*/}
            </ItemContent>
        </div>
    )
}

ViewContent.propTypes = {
    item: PropTypes.object.isRequired
}

export default ViewContent