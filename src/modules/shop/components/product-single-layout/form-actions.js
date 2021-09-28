import { useState } from "react"
import { Form } from "react-bootstrap"
import MyButton from "shared/components/elements/button"
import { CartIcon, CompareIcon, HeartIcon, MinusIcon, PlusIcon } from "shared/components/elements/icons"

function FormActions (props) {
    const { propsformik } = props
    const [quantity, setQuantity] = useState(1)

    /**
     * decrement state quantity one by one
     * @param {event} e 
     */
    const decrement = (e) => {
        e.preventDefault()
        if(quantity > 1) {
            setQuantity(quantity => quantity - 1)
        }
    }

    /**
     * increment state quantity one by one
     * @param {event} e 
     */
    const increment = (e) => {
        e.preventDefault()
        if(quantity < 10) {
            setQuantity(quantity => quantity + 1)
        }
    }

    /**
     * {@inheritdoc}
     */
    return (
        <div className="form__actions">
            <div className="quantity">
                <Form.Group>
                    <MyButton className="btn--reset btn__icon btn--border btn--dark" onClick={decrement} value={<MinusIcon />} />
                    <input className="input__default input--border" name="quantity" value={quantity} type="number" onChange={propsformik.handleChange} />
                    <MyButton className="btn--reset btn__icon btn--border btn--dark" onClick={increment} value={<PlusIcon />} />
                </Form.Group>
            </div>
            <MyButton type="submit" title="add to cart" className="btn--reset btn__default btn--primary" value={<><CartIcon className="icon mr-2" /> add to cart</>} />
            <MyButton type="button" title="like" className="btn--reset btn__icon btn--border btn--dark" value={<HeartIcon className="icon" />} />
            <MyButton type="button" title="compare" className="btn--reset btn__icon btn--border btn--dark" value={<CompareIcon className="icon" />} />
        </div>
    )
}

export default FormActions