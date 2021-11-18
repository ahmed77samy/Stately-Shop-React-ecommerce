import BorderLoading from "shared/components/elements/border-loading"
import { useState } from "react"
import { Link } from "react-router-dom"
import CartItem from "./cart-item"

function Cart (props) {
    let limited = 5
    const [limit , setLimit] = useState(limited)

    /**
     * set limit state to show more items
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        if(!(limit > props.data.length)) {
            return setLimit(limit => limit + limited)
        }
    }

    // map for userdata.cart to create product item
    const cartList = props.data?.map((item , index) => {
        return index < limit && <CartItem item={item} key={index} />
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
                {
                    // check data to previews
                    props.data === null ? <BorderLoading /> :
                    props.data === undefined ? <h5 className="text--typo">No Items Found !</h5> :
                    props.data && cartList
                }
            </div>
            {
                props.data && props.data.length > 0 && limit < props.data.length && 
                <Link to="/" className="anchors--reset d-block text-center text-capitalize text--primary--500 mx-auto mt-2" onClick={handleClick}>show more</Link>
            }
            {/*========== tab__content ==========*/}
        </div>
    )
}

export default Cart