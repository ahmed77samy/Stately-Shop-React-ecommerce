import Card from "shared/components/layout/card"
import PropTypes from "prop-types"
import ReviewsItem from "./reviews-item"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function UserReviews (props) {
    let limited = 8
    const [limit , setLimit] = useState(limited)

    /**
     * set limit state to show more items
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        if(!(limit > props.user_reviews.length)) {
            return setLimit(limit => limit + limited)
        }
    }

    // map for userdata.reviews to create product item
    const reviewsList = props.user_reviews?.map((item , index) => {
        return index < limit && <Col key={index} xs={12} sm={6} lg={4} xl={3}><ReviewsItem item={item} key={index} /></Col>
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="user__reviews">
            <Card>
                {/*========== layouts--header ==========*/}
                <div className="layouts layouts--header">
                    <div>
                        <h3 className="m-0 text-uppercase">latest reviews</h3>
                        <span className="text-uppercase">{props.user_reviews.length} items</span>
                    </div>
                </div>
                {/*========== layouts--header ==========*/}
                {/*========== layouts--body ==========*/}
                <div className="layouts layouts--body">
                    <Row className="layout--space">
                        {reviewsList}
                    </Row>
                    {
                        props.user_reviews && props.user_reviews.length > 0 && limit < props.user_reviews.length && 
                        <Link to="/" className="anchors--reset d-block text-capitalize mx-lg-auto mt-3" onClick={handleClick}>show more</Link>
                    }
                </div>
                {/*========== layouts--body ==========*/}
                {/*========== layouts--footer ==========*/}
                <div className="layouts layouts--footer">
                    <Link to="/shop/banner-sidebar" className="shopping anchors--reset text-uppercase">continue shopping.</Link>
                </div>
                {/*========== layouts--footer ==========*/}
            </Card>
        </div>
    )
}

UserReviews.propTypes = {
    user_reviews: PropTypes.array.isRequired
}

export default UserReviews