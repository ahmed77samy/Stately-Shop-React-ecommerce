import { Link } from "react-router-dom"
import { HeartIcon , CartIcon } from "shared/components/elements/icons"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import users from "modules/users/users"
import ProductModal from "shared/components/modals/product-modal"

function ProductThumbnailButtons (props) {
    const [cartstatus , setCartStatus] = useState(false)
    const [wishliststatus , setWishlistStatus] = useState(false)
    let user_wshl = useSelector(state => state.userReducer.user_wishlist)
    let user_cart = useSelector(state => state.userReducer.user_cart)
    let loggedIn = users.isLoggedIn()
    const [modal , setModal] = useState(false)

    // check if the given product is exits in wishlist
    useEffect(() => {
        let isMounted = true
        if(isMounted && loggedIn) {
            const status = user_wshl?.some((item , index) => {
                return +item.product_id === +props.id
            })
            setWishlistStatus(status)
        }
        return () => isMounted = false;
    },[user_wshl, props.id, loggedIn])
    
    // check if the given product is exits in cart
    useEffect(() => {
        let isMounted = true
        if(isMounted && loggedIn) {
            const status = user_cart?.some((item , index) => {
                return +item.product_id === +props.id
            })
            setCartStatus(status)
        }
        return () => isMounted = false;
    },[user_cart, props.id, loggedIn])

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    /**
     * handle click on the link
     * @param {Events} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        e.target.classList.add("checked")
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
        <div className='thumbnail__buttons'>
            <Link to="/" className={`anchors--reset badge__raduis ${cartstatus && "checked"} `} onClick={cartHandleClick}>
                <CartIcon className="icon" />
            </Link>
            <ProductModal item={props.item} show={modal} onHide={toggleModal}/>
            <Link to="/" className={`t--delay--1 anchors--reset badge__raduis ${wishliststatus && "checked"}`} onClick={handleClick}>
                <HeartIcon className="icon" />
            </Link>
        </div>
    )
}

ProductThumbnailButtons.propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
}

export default ProductThumbnailButtons