import { Link } from "react-router-dom"
import { HeartIcon , CartIcon } from "shared/components/elements/icons"

function ProductThumbnailButtons () {

    /**
     * handle click on the link
     * @param {Events} e 
     */
     function handleClick (e) {
        e.preventDefault()
        e.target.classList.add("checked")
    }

    return (
        <div className='thumbnail__buttons'>
            <Link to="/" className="anchors--reset badge__raduis" onClick={handleClick}>
                <CartIcon className="icon" />
            </Link>
            <Link to="/" className="t--delay--1 anchors--reset badge__raduis" onClick={handleClick}>
                <HeartIcon className="icon" />
            </Link>
        </div>
    )
}

export default ProductThumbnailButtons