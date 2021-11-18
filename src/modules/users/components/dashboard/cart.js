import ProductItem from "./product-item"
import PropTypes from "prop-types"

function Cart (props) {

    // map for userdata.cart to create product item
    const cartList = props.userData.cart.map((item , index) => {
        return <ProductItem item={item} key={index} />
    })
    
    /**
     * {@inheritdoc}
     */
    return (
        <div className="cart">
            {/*========== tab__header ==========*/}
            <div className="tab__header">
                <div>
                    <h3>Your cart</h3>
                </div>
                <div className="sort">
                    <div className="box">
                        <select id="user-cart-sort-select">
                            <option value="default">default</option>
                            <option value="rating">sort by quantity</option>
                            <option value="latest">sort by latest</option>
                            <option value="price_low_to_high">sort by price low to high</option>
                            <option value="price_high_to_low">sort by price high to low</option>
                        </select>
                    </div>
                </div>
            </div>
            {/*========== tab__header ==========*/}
            {/*========== tab__content ==========*/}
            <div className="tab__content">
                {cartList}
            </div>
            {/*========== tab__content ==========*/}
        </div>
    )
}

Cart.propTypes = {
    userData : PropTypes.object.isRequired
}

export default Cart