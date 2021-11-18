import { Field } from "formik"
import { useRef } from "react"
import { useEffect } from "react"
import { Form } from "react-bootstrap"
import { StarIcon } from "./icons"
import "./styles/fivestars-rating.scss"

function FiveStarsRating (props) {
    const input_FS_Ref = useRef(null);
    const {propsformik} = props

    // reset the five star input after submiting
    useEffect(() => {
        if(propsformik.isSubmitting) {
            input_FS_Ref.current.querySelectorAll(".form-check").forEach((e) => e.classList.remove("active"))
        }
    },[propsformik.isSubmitting])

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
        <div className="fivestars__rating" ref={input_FS_Ref}>
            {[1,2,3,4,5].map((item,index) => {
                return (
                    <Field
                        key={index}
                        as={Form.Check}
                        type="radio"
                        label={<StarIcon className="icon" />}
                        name="re_rate"
                        value={item}
                        onChange={propsformik.handleChange}
                        id={`product-single-reviews-rating-${item}`}
                        onClick={handleClick} 
                    />
                )
            })}
            {propsformik.touched.re_rate &&  propsformik.errors?.re_rate && <span className="m-0 text-danger text-capitalize">&nbsp;&nbsp;&nbsp;{propsformik.errors?.re_rate}</span>}
        </div>
    )
}

export default FiveStarsRating