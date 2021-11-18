import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "shared/components/layout/card"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import ProductModal from "shared/components/modals/product-modal"
import ProductFiveStars from "./product-fivestars"
import ProductSalary from "./product-salary"
import ProductThumbnailButtons from "./product-thumbnail-buttons"
import PropTypes from "prop-types"
import ConfigService from "core/config-service"
import { useSelector } from "react-redux"
import users from "modules/users/users"

function ProductItem (props) {
    const {pro_name , mainImage , sale, pro_rate, price, newest} = props.item
    const main_root = ConfigService.config.get("endpoints.url")
    const [modal , setModal] = useState(false)
    let user_wshl = useSelector(state => state.userReducer.user_wishlist)
    let user_cart = useSelector(state => state.userReducer.user_cart)
    let loggedIn = users.isLoggedIn()

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
        <Card>
            <div className='product__item'>
                {/*========== figure ==========*/}
                <Figure className="anchors--effect">
                    <div className="wrapper__badge">
                        {newest && <span className="badge badge--right bg--primary--400 text--white">new</span>}
                        {sale?.sale && <span className="badge badge--right bg--secondary--400 text--white">sale</span>}
                    </div>
                    {loggedIn ? (user_wshl && user_cart) && <ProductThumbnailButtons id={props.item.id} item={props.item} /> : <ProductThumbnailButtons id={props.item.id}  item={props.item} />}
                    <Link to="/" className="anchors--reset" onClick={handleClick}>
                        <img src={`${main_root}/${mainImage}`} alt="product" className="w-100" />
                    </Link>
                    <ProductModal item={props.item} show={modal} onHide={toggleModal}/>
                </Figure>
                {/*========== figure ==========*/}
                {/*========== item__content ==========*/}
                <ItemContent>
                    <h4 className="h6">
                        <Link to={`/shop/product-single/${props.item.id}`} className="anchors--reset">
                            {pro_name}
                        </Link>
                    </h4>
                    <ProductFiveStars stars={pro_rate} reviews={12} />
                    <ProductSalary salary={price} />
                </ItemContent>
                {/*========== item__content ==========*/}
            </div>
        </Card>
    )
}

ProductItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductItem