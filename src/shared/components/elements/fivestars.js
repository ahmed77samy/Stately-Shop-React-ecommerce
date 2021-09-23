import { StarIcon } from "../elements/icons";
import PropTypes from "prop-types"
import "./styles/fivestars.scss"

function FiveStars (props) {
    const {stars, reviews} = props;
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
        <div className="fivestars">
            {starList}&nbsp;&nbsp;<span className="font--size--small">(&nbsp;&nbsp;{reviews} Reviews&nbsp;&nbsp;)</span>
        </div>
    )
}

FiveStars.propTypes = {
    stars: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired
}

export default FiveStars