import ReviewsItem from "./reviews-item"
import PropTypes from "prop-types"

function Reviews (props) {

    // map for userdata.favourite to create product item
    const reviewsList = props.userData.reviews.map((item , index) => {
        return <ReviewsItem item={item} key={index} />
    })

    /**
     * {@inheritdoc}
     */
    return(
        <div className="reviews">
            {/*========== tab__header ==========*/}
            <div className="tab__header">
                <div>
                    <h3>Your cart</h3>
                </div>
                <div className="sort">
                    <div className="box">
                        <select id="user-reviews-sort-select">
                            <option value="newest">newest</option>
                            <option value="oldest">oldest</option>
                            <option value="low_rating">sort by low rating</option>
                            <option value="high_rating">sort by high rating</option>
                        </select>
                    </div>
                </div>
            </div>
            {/*========== tab__header ==========*/}
            {/*========== tab__content ==========*/}
            <div className="tab__content">
                {reviewsList}
            </div>
            {/*========== tab__content ==========*/}
        </div>
    )
}

Reviews.propTypes = {
    userData : PropTypes.object.isRequired
}

export default Reviews