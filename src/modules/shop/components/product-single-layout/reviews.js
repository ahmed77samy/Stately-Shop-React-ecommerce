import { Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import ReviewItem from "./review-item"
import { useState } from "react"
import { Link } from "react-router-dom"
import MyForm from "shared/components/elements/form"
import ReviewForm from "./review-form"

function Reviews (props) {
    const { reviews } = props.item
    const limited = 2
    const [limit , setLimit] = useState(limited)

    /**
     * set limit state to show more items
     * @param {event} e 
     */
     const showMore = (e) => {
        e.preventDefault()
        setLimit(reviews.length)
    }
    
    // map for reviews to create review items
    const reviewList = reviews.map((item , index) => {
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
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <div className="tab__header">
                        <h5>add a review</h5>
                        <span>Your email address will not be published. Required fields are marked *</span>
                    </div>
                    <MyForm initialValues={{comment: "",rating:""}}>
                        <ReviewForm />
                    </MyForm>
                </Col>
                {/*========== Col ==========*/}
            </Row>
        </div>
    )
}

Reviews.propTypes = {
    item: PropTypes.object.isRequired
}

export default Reviews