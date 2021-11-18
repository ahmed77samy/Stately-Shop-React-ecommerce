import ProductSalary from "modules/shop/components/products/product-salary"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { CartIcon, TrashIcon } from "shared/components/elements/icons"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"

function FavouriteItem (props) {

    // const {product, size, color, quantity} = props.item
    const {name, photo, salary, sale} = props.item

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
                        <span className="text-uppercase"> <ProductSalary sale={sale} salary={salary} /> </span>
                    </div>
                </ItemContent>
            </div>
            {/*========== details ==========*/}
            <div className="thumbnail__buttons">
                <Link to="/" className="anchors--reset badge__raduis">
                    <CartIcon className="icon" />
                </Link>
                <Link to="/" className="anchors--reset badge__raduis">
                    <TrashIcon className="icon text-danger" />
                </Link>
            </div>
        </div>
    )
}

FavouriteItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FavouriteItem