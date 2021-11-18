import { Field } from "formik"
import { Form } from "react-bootstrap"
import MyButton from "shared/components/elements/button"
import FiveStarsRating from "shared/components/elements/fivestars-rating"

function ReviewForm ({propsformik, waitreq}) {
    return (
        <>
            {/*========== Form.Group ==========*/}
            <Form.Group className="rating">
                <FiveStarsRating propsformik={propsformik} />
            </Form.Group>
            {/*========== Form.Group ==========*/}
            {/*========== Form.Group ==========*/}
            <Form.Group>
                {propsformik.touched.re_des && propsformik.errors?.re_des && <span className="text-danger text-capitalize filed__error">&nbsp;&nbsp;&nbsp;{propsformik.errors?.re_des}</span>}
                <Field as="textarea" placeholder="Your Comment" name="re_des" className="input__default input--border input__textarea" onChange={propsformik.handleChange} />
            </Form.Group>
            {/*========== Form.Group ==========*/}
            <MyButton type="submit" waitrequest={`${waitreq}`} value='submit review' className={`btn--reset btn__default btn--primary mx-auto ${waitreq && 'disabled'}`} />
        </>
    )
}

export default ReviewForm