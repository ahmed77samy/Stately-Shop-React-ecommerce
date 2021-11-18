import PropTypes from "prop-types"
import { ClockIcon } from "shared/components/elements/icons"
import ProductItem from "./product-item"

function OrderItem (props) {
    const { serial, pending, date, total, products } = props.item

    // map for products to create product item
    const productList = products.map((item , index) => <ProductItem key={index} item={item} />)

    /**
     * remove all active class from order item
     * add active class to target order item
     * @param {event} e 
     */
    const handleClick = (e) => {
        const wrapper = e.target.closest(".tab__content")
        wrapper.querySelector(".order__item.active")?.classList.remove("active")
        e.target.closest(".order__item")?.classList.add("active")
    }

    /**
     * {@inheritdoc}
     */
    return(
        <div className={`order__item ${props.className}`}>
            {/*========== order__header ==========*/}
            <div className='order__header'>
                <button className={`btn--reset ${pending === "in progress" ? "progressed" : pending === "delivered" ? "delivered" : pending === "canceled" && "canceled" }`} onClick={handleClick}>
                    <span className="text--primary--400"># {serial}</span>
                    <span><ClockIcon />&nbsp;&nbsp; {date}</span>
                    <span className="badge text-capitalize bg--primary--100 text--primary--400">{pending}</span>
                    <span className="text--black">$ {total}</span>
                </button>
            </div>
            {/*========== order__header ==========*/}
            {/*========== order__content ==========*/}
            <div className="order__content">
                {productList}
                <div className="hr--1 bg--neutral--200"></div>
                <div className="cost">
                    <div>
                        <label className="text-capitalize m-0">subtotal :&nbsp; </label>
                        <span>153.49$</span>
                    </div>
                    <div>
                        <label className="text-capitalize m-0">shipping :&nbsp; </label>
                        <span>27.49$</span>
                    </div>
                    <div>
                        <label className="text-capitalize m-0">tax :&nbsp; </label>
                        <span>6.08$</span>
                    </div>
                    <div>
                        <label className="text-capitalize m-0">subtotal :&nbsp; </label>
                        <span>187.56$</span>
                    </div>
                </div>
            </div>
            {/*========== order__content ==========*/}
        </div>
    )
}

OrderItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default OrderItem