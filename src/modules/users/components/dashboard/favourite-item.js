import ConfigService from "core/config-service"
import ProductFiveStars from "modules/shop/components/products/product-fivestars"
import ProductSalary from "modules/shop/components/products/product-salary"
import PropTypes from "prop-types"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartIcon, TrashIcon } from "shared/components/elements/icons"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import ProductModal from "shared/components/modals/product-modal"

function FavouriteItem (props) {
    const [modal , setModal] = useState(false)
    const {pro_name, mainImage, price, pro_rate, product_id} = props.item
    const main_root = ConfigService.config.get("endpoints.url")

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    // prevent default
    const handlePrevent = (e) => e.preventDefault()

    /**
     * set modal to true to handle action
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        toggleModal()
    }

    /**
     * {@inheritdoc}
     */
    return (
        <div className='product__item'>
            {/*========== details ==========*/}
            <div className="details">
                <Figure className="anchors--effect">
                    <Link to={`/shop/product-single/${product_id}`} className="anchors--reset">
                        <img src={`${main_root}/${mainImage}`} alt="product" />
                    </Link>
                </Figure>
                <ItemContent>
                    <h6>
                        <Link to={`/shop/product-single/${product_id}`} className="anchors--reset">{pro_name}</Link>
                    </h6>
                    <div>
                        <ProductSalary salary={price} />
                    </div>
                    <div>
                        <ProductFiveStars stars={pro_rate} />
                    </div>
                </ItemContent>
            </div>
            {/*========== details ==========*/}
            <div className="thumbnail__buttons">
                <Link to="/" className="anchors--reset badge__raduis" onClick={handleClick}>
                    <CartIcon className="icon" />
                </Link>
                <ProductModal item={props.item} show={modal} onHide={toggleModal}/>
                <Link to="/" className="anchors--reset badge__raduis" onClick={handlePrevent}>
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