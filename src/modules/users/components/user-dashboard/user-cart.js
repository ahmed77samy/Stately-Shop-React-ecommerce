import Card from "shared/components/layout/card"
import PropTypes from "prop-types"
import CartItem from "./cart-item"
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductSalary from "modules/shop/components/products/product-salary";

function UserCart (props) {
    let limited = 5
    const [limit , setLimit] = useState(limited)

    /**
     * set limit state to show more items
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        if(!(limit > props.user_cart.length)) {
            return setLimit(limit => limit + limited)
        }
    }

    // map for userdata.cart to create product item
    const cartList = props.user_cart?.map((item , index) => {
        return index < limit && <CartItem item={item} key={index} />
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="user__cart">
            <Card>
                {/*========== layouts--header ==========*/}
                <div className="layouts layouts--header">
                    <div>
                        <h3 className="m-0 text-uppercase">your cart</h3>
                        <span className="text-uppercase">{props.user_cart.length} items</span>
                    </div>
                    <div>
                        <span className="text-uppercase">total</span>
                        <ProductSalary salary={props.user_cart.reduce((acc, item) => (acc) + (item.price * item.quantity) ,0)} />
                    </div>
                </div>
                {/*========== layouts--header ==========*/}
                {/*========== layouts--body ==========*/}
                <div className="layouts layouts--body">
                    {cartList}
                    {
                        props.user_cart && props.user_cart.length > 0 && limit < props.user_cart.length && 
                        <Link to="/" className="anchors--reset d-block text-capitalize mx-lg-auto mt-3" onClick={handleClick}>show more</Link>
                    }
                </div>
                {/*========== layouts--body ==========*/}
                {/*========== layouts--footer ==========*/}
                <div className="layouts layouts--footer">
                    <Link to="/shop/banner-sidebar" className="shopping anchors--reset text-uppercase">continue shopping.</Link>
                    <Link to="/" className="anchors--reset btn__default btn--primary text--white">check out</Link>
                </div>
                {/*========== layouts--footer ==========*/}
            </Card>
        </div>
    )
}

UserCart.propTypes = {
    user_cart: PropTypes.array.isRequired
}

export default UserCart