import Card from "shared/components/layout/card"
import PropTypes from "prop-types"
import WishlistItem from "./wishlist-item.js"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function UserWishlist (props) {
    let limited = 8
    const [limit , setLimit] = useState(limited)

    /**
     * set limit state to show more items
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        if(!(limit > props.user_wishlist.length)) {
            return setLimit(limit => limit + limited)
        }
    }

    // map for userdata.wishlist to create product item
    const wishlistList = props.user_wishlist?.map((item , index) => {
        return index < limit && <Col key={index} xs={12} sm={6} lg={4} xl={3}><WishlistItem item={item} /></Col>
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="user__wishlist">
            <Card>
                {/*========== layouts--header ==========*/}
                <div className="layouts layouts--header">
                    <div>
                        <h3 className="m-0 text-uppercase">your wishlist</h3>
                        <span className="text-uppercase">{props.user_wishlist.length} items</span>
                    </div>
                </div>
                {/*========== layouts--header ==========*/}
                {/*========== layouts--body ==========*/}
                <div className="layouts layouts--body">
                    <Row className="layout--space">
                        {wishlistList}
                    </Row>
                    {
                        props.user_wishlist && props.user_wishlist.length > 0 && limit < props.user_wishlist.length && 
                        <Link to="/" className="anchors--reset d-block text-capitalize mx-lg-auto mt-3" onClick={handleClick}>show more</Link>
                    }
                </div>
                {/*========== layouts--body ==========*/}
                {/*========== layouts--footer ==========*/}
                <div className="layouts layouts--footer">
                    <Link to="/shop/banner-sidebar" className="shopping anchors--reset text-uppercase">continue shopping.</Link>
                    <button className="btn__default bg-danger text--white">delete all</button>
                </div>
                {/*========== layouts--footer ==========*/}
            </Card>
        </div>
    )
}

UserWishlist.propTypes = {
    user_wishlist: PropTypes.array.isRequired
}

export default UserWishlist