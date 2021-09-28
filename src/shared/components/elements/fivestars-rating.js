import { Form } from "react-bootstrap"
import { StarIcon } from "./icons"
import "./styles/fivestars-rating.scss"

function FiveStarsRating (props) {
    const {propsformik} = props

    /**
     * handle click rating buttons and (add , remove) classes active
     * remove class active from all node form-check
     * add previous active elements to result
     * add class active to all pervious node form-check
     * @param {event} e 
     */
    const handleClick = (e) => {
        const wrapper = e.target.closest(".fivestars__rating");
        let result = [];
        let formcheck = e.target.closest(".form-check");
        
        while ( formcheck ) {
            if ( formcheck !== this && formcheck.nodeType === formcheck.ELEMENT_NODE ) 
            result.push( formcheck );
            formcheck = formcheck.previousElementSibling
        }
        wrapper.querySelectorAll(".form-check").forEach((e) => e.classList.remove("active"))
        result.forEach(e => e.classList.add("active"))
    }

    /**
     * {@inheritdoc}
     */
    return (
        <div className="fivestars__rating">
            {[1,2,3,4,5].map((item,index) => {
                return (
                    <Form.Check
                        key={index}
                        type="radio"
                        label={<StarIcon />}
                        name="rating"
                        value={item}
                        onChange={propsformik.handleChange}
                        id={`product-single-reviews-rating-${item}`}
                        onClick={handleClick} 
                    />
                )
            })}
        </div>
    )
}

export default FiveStarsRating