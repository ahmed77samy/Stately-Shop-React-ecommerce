import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"

function OrderContent (props) {
    const {product, size, color, quantity} = props.item
    const {name, photo, salary, sale} = product

    /**
     * {@inheritdoc}
     */
    return (
        <div className='product__item'>
            {/*========== details ==========*/}
            <div className="details">
                <Figure className="anchors--effect">
                    <Link to="/" className="anchors--reset">
                        <img src={photo} alt="product" />
                    </Link>
                </Figure>
                <ItemContent>
                    <h6>
                        <Link to="/" className="anchors--reset">{name}</Link>
                    </h6>
                    <div>
                        <label className="text-capitalize">size:&nbsp;</label>
                        <span className="text-uppercase">{size}</span>
                    </div>
                    <div>
                        <label className="text-capitalize">color:&nbsp;</label>
                        <span className="text-uppercase">{color}</span>
                    </div>
                </ItemContent>
            </div>
            {/*========== details ==========*/}
            {/*========== quantity ==========*/}
            <div className="quantity">
                <label className="text-capitalize">quantity: </label>
                <span>{quantity}</span>
            </div>
            {/*========== quantity ==========*/}
            {/*========== subtotal ==========*/}
            <div className="subtotal">
                <label className="text-capitalize">subtotal: </label>
                <span>{sale ? sale.sale.toFixed(2) : salary.toFixed(2)}&</span>
            </div>
            {/*========== subtotal ==========*/}
        </div>
    )
}

OrderContent.propTypes = {
    item: PropTypes.object.isRequired
}

export default OrderContent