import { Form } from "react-bootstrap"
import MyButton from "shared/components/elements/button"
import FiveStarsRating from "shared/components/elements/fivestars-rating"

function ReviewForm ({propsformik}) {
    return (
        <>
            {/*========== Form.Group ==========*/}
            <Form.Group className="rating">
                <label className="m-0">rating: </label>
                <FiveStarsRating propsformik={propsformik} />
            </Form.Group>
            {/*========== Form.Group ==========*/}
            {/*========== Form.Group ==========*/}
            <Form.Group>
                <textarea placeholder="Your Comment" name="comment" className="input__default input--border input__textarea" onChange={propsformik.handleChange} />
            </Form.Group>
            {/*========== Form.Group ==========*/}
            <MyButton type="submit" value='submit review' className="btn--reset btn__default btn--primary mx-auto" />
        </>
    )
}

export default ReviewForm