import users from "modules/users/users"
import { useState, useRef } from "react"
import { Form } from "react-bootstrap"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import MyButton from "shared/components/elements/button"
import { CartIcon, CompareIcon, HeartIcon, MinusIcon, PlusIcon } from "shared/components/elements/icons"
import { useEffect } from "react"

function FormActions (props) {
    const { propsformik , item , waitreq } = props
    const [quantity, setQuantity] = useState(0)
    const quantityRef = useRef(0)
    let loggedIn = users.isLoggedIn();
    const user_wishlist = useSelector(state => state.userReducer.user_wishlist)

    // reset quantity if isSubmitting
    useEffect(() => {
        let isMounted = true
        if(propsformik.isSubmitting && isMounted) {
            setQuantity(0)
        }
        return () => isMounted = false;
    },[propsformik.isSubmitting])
    
    /**
     * check if the product is exits in user_wishlist or no
     * @returns {boolean}
     */
    const check_wishlist = () => {
        if(loggedIn && user_wishlist) {
            return user_wishlist.some((el) => {
                return el.product_id === item.id
            })
        }
    }

    /**
     * decrement state quantity one by one
     * add new event and called handleChange
     * @param {event} e 
     */
    const decrement = (e) => {
        e.preventDefault()
        setQuantity(quantity => quantity - 1)
        var event = new Event(quantityRef.current, {
            bubbles: true,
            cancelable: true,
        });
        quantityRef.current.dispatchEvent(event);
        handleChange(event , true , quantity - 1);
    }

    /**
     * increment state quantity one by one
     * add new event and called handleChange
     * @param {event} e 
     */
    const increment = (e) => {
        e.preventDefault()
        setQuantity(quantity => quantity + 1)
        var event = new Event(quantityRef.current, {
            bubbles: true,
            cancelable: true,
        });
        quantityRef.current.dispatchEvent(event);
        handleChange(event , true , quantity + 1);
    }

    /**
     * handle change satate
     * @param {event} e 
     * @param {boolean} x 
     * @param {number} y 
     */
    const handleChange = (e, x, y) => {
        if(!x) {
            setQuantity(e.target.value);
        } else {
            e.target.value = y;
        }
        propsformik.handleChange(e);
    }

    /**
     * {@inheritdoc}
     */
    return (
        <div className="form__actions">
            <div className="quantity">
                <Form.Group>
                    <MyButton className="btn--reset btn__icon btn--border btn--dark" name="v" onClick={decrement} value={<MinusIcon />} />
                    <input className="input__default input--border" name="quantity" ref={quantityRef} value={quantity} type="number" onChange={handleChange} />
                    <MyButton className="btn--reset btn__icon btn--border btn--dark" name="quantity" onClick={increment} value={<PlusIcon />} />
                </Form.Group>
            </div>
            <MyButton type="submit" waitrequest={`${waitreq}`} title="add to cart" className={`btn--reset btn__default btn--primary ${waitreq && 'disabled'}`} value={<><CartIcon className="icon mr-2" /> add to cart</>} />
            <MyButton type="button" title="like" className={`btn--reset btn__icon btn--primary ${!check_wishlist() && 'btn--border'}`} value={<HeartIcon className="icon" />} />
            <MyButton type="button" title="compare" className="btn--reset btn__icon btn--border btn--primary" value={<CompareIcon className="icon" />} />
            {
                propsformik.touched.quantity && propsformik.errors?.quantity && 
                <span className="text-danger text-capitalize filed__error w-100">&nbsp;&nbsp;&nbsp;{propsformik.errors?.quantity}</span>
            }
        </div>
    )
}

FormActions.propTypes = {
    item: PropTypes.object.isRequired
}

export default FormActions