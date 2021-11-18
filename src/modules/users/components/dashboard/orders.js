import OrderItem from "./order-item"
import PropTypes from "prop-types"

function Orders (props) {
    // map for userData.orders to create order items
    const orderList = props.data?.map((item , index) => {
        return (
            <OrderItem className={index === 0 && "active"} item={item} key={index} />
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="orders">
            {/*========== tab__header ==========*/}
            <div className="tab__header">
                <div>
                    <h3>orders history</h3>
                </div>
                <div className="sort">
                    <div className="box">
                        <select id="user-orders-sort-select">
                            <option value="all">all</option>
                            <option value="in progress">sort by in progress</option>
                            <option value="delivered">sort by delivered</option>
                            <option value="canceled">sort by canceled</option>
                        </select>
                    </div>
                </div>
            </div>
            {/*========== tab__header ==========*/}
            {/*========== tab__content ==========*/}
            <div className="tab__content">
                {orderList}
            </div>
            {/*========== tab__content ==========*/}
        </div>
    )
}

Orders.propTypes = {
    data: PropTypes.array.isRequired
}

export default Orders