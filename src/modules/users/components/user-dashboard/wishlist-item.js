import { useState } from "react"
import { Link } from "react-router-dom"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import ProductModal from "shared/components/modals/product-modal"
import PropTypes from "prop-types"
import ConfigService from "core/config-service"
import ProductFiveStars from "modules/shop/components/products/product-fivestars"
import ProductSalary from "modules/shop/components/products/product-salary"
import { TimesIcon } from "shared/components/elements/icons"

function WishlistItem (props) {
    const {pro_name , mainImage , pro_rate, price, product_id, pro_des} = props.item
    const main_root = ConfigService.config.get("endpoints.url")
    const [modal , setModal] = useState(false)

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

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
    return(
        <div className='wishlist__item'>
            {/*========== figure ==========*/}
            <Figure className="anchors--effect">
                <div className='thumbnail__buttons'>
                    <Link to="/" className="anchors--reset badge__raduis checked bg-danger" onClick={e => e.preventDefault()}>
                        <TimesIcon className="icon" />
                    </Link>
                </div>
                <Link to="/" className="anchors--reset" onClick={handleClick}>
                    <img src={`${main_root}/${mainImage}`} alt="product" className="w-100" />
                </Link>
                <ProductModal item={props.item} show={modal} onHide={toggleModal}/>
            </Figure>
            {/*========== figure ==========*/}
            {/*========== item__content ==========*/}
            <ItemContent>
                <h4 className="h6">
                    <Link to={`/shop/product-single/${product_id}`} className="anchors--reset">
                        {pro_name}
                    </Link>
                </h4>
                <ProductFiveStars stars={pro_rate} reviews={12} />
                <ProductSalary salary={price} />
                <p className="description">{pro_des}</p>
            </ItemContent>
            {/*========== item__content ==========*/}
        </div>
    )
}

WishlistItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default WishlistItem