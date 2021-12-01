import Card from "shared/components/layout/card"
import PropTypes from "prop-types"
import OrderItem from "./order-item"
import { useState } from "react";
import { Link } from "react-router-dom";

function UserOrders (props) {
    let limited = 8
    const [limit , setLimit] = useState(limited)

    /**
     * set limit state to show more items
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        if(!(limit > props.user_orders.length)) {
            return setLimit(limit => limit + limited)
        }
    }

    // map for userdata.orders to create product item
    const ordersList = props.user_orders?.map((item , index) => {
        return index < limit && <OrderItem className={index === 0 && "active"} item={item} key={index} />
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="user__orders">
            <Card>
                {/*========== layouts--header ==========*/}
                <div className="layouts layouts--header">
                    <div>
                        <h3 className="m-0 text-uppercase">your orders</h3>
                        <span className="text-uppercase">{props.user_orders.length} items</span>
                    </div>
                </div>
                {/*========== layouts--header ==========*/}
                {/*========== layouts--body ==========*/}
                <div className="layouts layouts--body">
                    {ordersList}
                    {
                        props.user_orders && props.user_orders.length > 0 && limit < props.user_orders.length && 
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

UserOrders.propTypes = {
    user_orders: PropTypes.array.isRequired
}

export default UserOrders