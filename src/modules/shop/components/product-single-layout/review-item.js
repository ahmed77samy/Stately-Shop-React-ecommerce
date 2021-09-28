import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import ProductFiveStars from "../products/product-fivestars"

function ReviewItem (props) {
    const { photo, comment, time, name, rating } = props.item

    /**
     * {@inheritdoc}
     */
    return(
        <div className="review__item">
            {/*========== Figure ==========*/}
            <Figure className="anchors--effect effect--2"> 
                <Link to="/" className="anchors--reset">
                    <img src={photo} alt="user" />
                </Link>
            </Figure>
            {/*========== Figure ==========*/}
            {/*========== ItemContent ==========*/}
            <ItemContent>
                <div className="item__header mb-2">
                    <div>
                        <h5 className="h6 m-0">
                            <Link to="/" className="anchors--reset">{name}</Link>
                        </h5>
                        <span className="font--size--small">{time}</span>
                    </div>
                    <ProductFiveStars stars={rating} />
                </div>
                <p>
                    {comment}
                </p>
            </ItemContent>
            {/*========== ItemContent ==========*/}
        </div>
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ReviewItem