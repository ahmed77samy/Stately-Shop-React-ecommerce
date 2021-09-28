import PropTypes from "prop-types"
import { InStockIcon, OutStockIcon } from "shared/components/elements/icons"
import "./styles/product-stock.scss"

function ProductStock (props) {
    const { stock } = props
    return(
        <span className="stock">
            {
                stock ? 
                <span className="in--stock">
                    <InStockIcon className="icon mr-1" /> in stock
                </span> : 
                <span className="out--stock">
                    <OutStockIcon className="icon mr-1" /> out of stock
                </span>
            }
        </span>
    )
}

ProductStock.propTypes = {
    stock: PropTypes.bool.isRequired
}

export default ProductStock