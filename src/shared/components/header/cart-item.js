import ConfigService from "core/config-service"
import ProductSalary from "modules/shop/components/products/product-salary"
import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { Figure } from "react-bootstrap"
import { Link } from "react-router-dom"
import ItemContent from "../layout/item-content"
import ShopApi from "modules/shop/services/api"
import { EditIcon, TrashIcon } from "../elements/icons"

function CartItem (props) {
    const main_root = ConfigService.config.get("endpoints.url")
    const [size , setSize] = useState(null)
    const [color , setColor] = useState(null)
    let {mainImage, pro_name, price, product_id, size_id, color_id, quantity} = props.item

    // preventDefault to links
    const preventDefault = e => e.preventDefault()

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

    /**
     * {@inheritdoc}
     */
    return (
        <div className="result__item">
            <Figure className="anchors--effect effect--2">
                <Link to={`/shop/product-single/${product_id}`} className="anchors--reset">
                    <img src={`${main_root}/${mainImage}`} alt="product-item" />
                </Link>
            </Figure>
            <ItemContent>
                <h6><Link to={`/shop/product-single/${product_id}`} className="anchors--reset">{pro_name}</Link></h6>
                <ProductSalary className="mb-2" salary={price} />
                <p className="mb-3">
                    <span>{size}</span>
                    / <span style={{color: color}}>COLOR</span>
                    / {quantity} Pieces
                </p>
                {/*========== actions ==========*/}
                <div className="actions">
                    <Link to="/" className="anchors--reset badge__raduis checked" onClick={preventDefault}>
                        <EditIcon className="icon" />
                    </Link>
                    <Link to="/" className="anchors--reset badge__raduis bg-danger" onClick={preventDefault}>
                        <TrashIcon className="icon" />
                    </Link>
                </div>
                {/*========== actions ==========*/}
            </ItemContent>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem



