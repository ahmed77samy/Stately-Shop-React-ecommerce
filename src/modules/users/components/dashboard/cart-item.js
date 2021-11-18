import ConfigService from "core/config-service"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import ShopApi from "modules/shop/services/api"
import { useEffect, useState } from "react"
import { EditIcon, TrashIcon } from "shared/components/elements/icons"

function CartItem (props) {
    const {pro_name, mainImage, price, size_id, color_id, quantity, product_id} = props.item
    const main_root = ConfigService.config.get("endpoints.url")
    const [size , setSize] = useState(null)
    const [color , setColor] = useState(null)

    // fetch size from ShopApi
    useEffect(() => {
        let isMounted = true;
        ShopApi.showDefaultSize(size_id)
        .then((data) => {
            if(isMounted) {
                setSize(data.data.payload.pro_size)
            }
        })
        .catch(() => {
            if(isMounted){
                setSize(undefined);
            }
        })

        return () => isMounted = false;
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    // fetch color from ShopApi
    useEffect(() => {
        let isMounted = true;
        ShopApi.showDefaultColor(color_id)
        .then((data) => {
            if(isMounted) {
                setColor(data.data.payload.pro_color)
            }
        })
        .catch(() => {
            if(isMounted){
                setColor(undefined);
            }
        })

        return () => isMounted = false;
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    // prevent default
    const handleClick = (e) => e.preventDefault()

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
                        <label className="text-capitalize">size:&nbsp;</label>
                        <span className="text-uppercase">{size}</span>
                    </div>
                    <div>
                        <label className="text-capitalize">color:&nbsp;</label>
                        <span className="text-uppercase" style={{color: color}}>{color}</span>
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
                <span>{price}$</span>
            </div>
            {/*========== subtotal ==========*/}
            {/*========== actions ==========*/}
            <div className="actions">
                <Link to="/" className="anchors--reset badge__raduis bg-primary" onClick={handleClick}>
                    <EditIcon className="icon" />
                </Link>
                <Link to="/" className="anchors--reset badge__raduis bg-danger" onClick={handleClick}>
                    <TrashIcon className="icon" />
                </Link>
            </div>
            {/*========== actions ==========*/}
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default CartItem