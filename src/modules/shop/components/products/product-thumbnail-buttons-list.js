import { HeartIcon , CartIcon } from "shared/components/elements/icons"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import users from "modules/users/users"
import ProductModal from "shared/components/modals/product-modal"

function ProductThumbnailButtonsList (props) {
    const [cartstatus , setCartStatus] = useState(false)
    const [wishliststatus , setWishlistStatus] = useState(false)
    let user_wshl = useSelector(state => state.userReducer.user_wishlist)
    let user_cart = useSelector(state => state.userReducer.user_cart)
    let loggedIn = users.isLoggedIn()
    const [modal , setModal] = useState(false)

    // check if the given product is exits in wishlist
    useEffect(() => {
        if(loggedIn) {
            const status = user_wshl.some((item , index) => {
                return item.product_id === props.id
            })
            setWishlistStatus(status)
        }
    },[user_wshl, props.id, loggedIn])
    
    // check if the given product is exits in cart
    useEffect(() => {
        if(loggedIn) {
            const status = user_cart.some((item , index) => {
                return +item.product_id === +props.id
            })
            setCartStatus(status)
        }
    },[user_cart, props.id, loggedIn])

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    /**
     * handle click on the link
     * @param {Events} e 
     */
    const handleClick = (e) => {
        e.target.classList.add("active")
    }

    /**
     * set modal to true to handle action
     * @param {event} e 
     */
    const cartHandleClick = (e) => {
        e.preventDefault()
        toggleModal()
    }

    return (
        <div className='thumbnail__buttons__list'>
            <button className={`btn__default btn--primary btn--border ${cartstatus && "active"}`} onClick={cartHandleClick}><CartIcon className="icon" /> &nbsp; add to cart</button>
            <ProductModal item={props.item} show={modal} onHide={toggleModal}/>
            <button className={`anchors--reset btn__default btn--border btn--primary ${wishliststatus && "active"}`} onClick={handleClick}>
                <HeartIcon className="icon" />
            </button>
        </div>
    )
}

ProductThumbnailButtonsList.propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
}

export default ProductThumbnailButtonsList