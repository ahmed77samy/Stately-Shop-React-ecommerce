import PropTypes from "prop-types"
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { StarIcon } from "shared/components/elements/icons";
import "./styles/product-fivestars.scss"

function ProductFiveStars (props) {
    const {stars, reviews, className} = props;
    let fiveStars = Array.from(Array(5));

    // map for fiveStars to create stars fill and stroke
    const starList = fiveStars.map((e, i) => {
        let type = stars > (i) ? 'fill' : 'empty'
        return type === "fill" ? 
        <span key={i}><StarIcon className={`icon ${type}`} /></span> : 
        <span key={i}><StarIcon className={`icon ${type}`} /></span>
    })

    /**
     * {@inheritdoc}
     */
    return (
            <div {...props} className={`fivestars ${className}`}>
                {/*========== OverlayTrigger ==========*/}
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip>
                            {stars}.00
                        </Tooltip>
                    }
                >
                    <div className="d-inline">
                        {starList}&nbsp;&nbsp;
                    </div>
                </OverlayTrigger>
                {/*========== OverlayTrigger ==========*/}
                {/**
                 * check if reviews is exists
                 */}
                {
                    reviews && (
                        <span className="font--size--small">
                            (&nbsp;&nbsp;{reviews} Reviews&nbsp;&nbsp;)
                        </span>
                    )
                }
            </div>
        
    )
}

ProductFiveStars.propTypes = {
    stars: PropTypes.number.isRequired,
    reviews: PropTypes.number
}

export default ProductFiveStars