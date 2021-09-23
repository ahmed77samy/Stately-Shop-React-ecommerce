import ItemContent from "./item-content"
import Figure from "./figure"
import "./styles/banner.scss"
import PropTypes from "prop-types"

function Banner (props) {
    const { bg, alt, height, width, children, className } = props

    /**
     * {@inheritdoc}
     */
    return(
        <div className={`banner ${className}`}>
            <Figure>
                <img src={bg} alt={alt} height={height} width={width} />
            </Figure>
            <ItemContent>
                {children}
            </ItemContent>
        </div>
    )
}

Banner.propTypes = {
    bg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
}

Banner.defaultProps = {
    width: "100%",
    height: "500",
}

export default Banner