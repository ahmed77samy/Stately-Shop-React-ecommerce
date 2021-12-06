import { Col, Row } from "react-bootstrap"
import ReviewItem from "./review-item"
import { useState } from "react"
import { Link } from "react-router-dom"
import MyForm from "shared/components/elements/form"
import ReviewForm from "./review-form"
import { useSelector } from "react-redux"
import shop from "modules/shop/shop"
import * as Yup from "yup"
import { store } from "core/route-service"
import ShopApi from "../../services/api"
import { addNotify } from "core/notification-service"

function Reviews (props) {
    let reviews = useSelector(state => state.shopReducer.product_reviews)
    const limited = 2
    const [limit , setLimit] = useState(limited)
    const [waitreq , setWaitreq] = useState(false)

    // schema validation with yup shape
    let ReviewSchema = Yup.object().shape(shop.ReviewSchema)

    /**
     * set limit state to show more items
     * @param {event} e 
     */
    const showMore = (e) => {
        e.preventDefault()
        setLimit(l => l + 5)
    }

    /**
     * called store review from ShopApi
     * save the given review in the store
     * reset the form
     * @param {Object} values 
     * @param {Object} actions 
     */
    const handleSubmit = (values , actions) => {
        setWaitreq(true)
        let token = store.getState().userReducer.user.access_token;
        let user_id = store.getState().userReducer.user.user.id;
        let product_id = props.id;
        let f_values = {
            ...values,
            user_id,
            product_id
        }
        ShopApi.storeReview(f_values, token)
        .then((data) => {
            let f_data = {
                ...props.item,
                ...data.data.payload
            }
            setWaitreq(false)
            addNotify({
                title: "success process",
                message: "review has been send",
                level: 'success',
                position: 'bl',
            })
            shop.addReview(f_data)
            actions.resetForm({ values: {re_rate: "",re_des:""} })
        })
        .catch(({response}) => {
            setWaitreq(false)
            addNotify({
                title: "error process",
                message: `${response.data.message}`,
                level: 'error',
                position: 'bl',
            })
        })
    }
    
    // map for reviews to create review items
    const reviewList = reviews?.map((item , index) => {
        return index < limit && (
            <Col xs={12} key={index}>
                <ReviewItem item={item} />
            </Col>
        )
    })

    /**
     * {@inheritdoc}
     */
    return(
        <div className="reviews">
            <Row className="layout--space">
                {/*========== Col ==========*/}
                {
                    (reviews && reviews.length > 0) && 
                    <Col xs={12}>
                        <div className="tab__header">
                            <h5>reviews ({reviews.length})</h5>
                        </div>
                        <Row className="layout--space--30">
                            {reviewList}
                            {
                                reviews.length > limit &&
                                <Col xs={12} className="text-center">
                                    <Link to="/" className="anchors--reset show__reviews" onClick={showMore}>Show More ({reviews.length - limit})</Link>
                                </Col>
                            }
                        </Row>
                    </Col>
                }
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <div className="tab__header">
                        <h5>add a review</h5>
                        <span>Your email address will not be published. Required fields are marked *</span>
                    </div>
                    <MyForm initialValues={{re_rate: "",re_des:""}} validationSchema={ReviewSchema} onSubmit={handleSubmit}>
                        <ReviewForm waitreq={waitreq} />
                    </MyForm>
                </Col>
                {/*========== Col ==========*/}
            </Row>
        </div>
    )
}

export default Reviews