import { Form } from "react-bootstrap";

function FormColors (props) {
    const { propsformik } = props

    /**
     * {@inheritdoc}
     */
    return(
        <div className="colors">
            <Form.Group>
                <label>color:&nbsp;&nbsp;
                    {propsformik.values.color === "" ? <span>Is Required!</span> : <span className="text--primary--500">{propsformik.values.color}</span>}
                </label>
                {/*========== Form.Check ==========*/}
                <Form.Check id="product-single-form-color-grey">
                    <Form.Check.Input type='radio' value="grey" name="color" onChange={propsformik.handleChange} />
                    <Form.Check.Label role="button" style={{background: '#CCCCCC'}} />
                </Form.Check>
                {/*========== Form.Check ==========*/}
                {/*========== Form.Check ==========*/}
                <Form.Check id="product-single-form-color-pink">
                    <Form.Check.Input type='radio' value="pink" name="color" onChange={propsformik.handleChange} />
                    <Form.Check.Label role="button" style={{background: 'pink'}} />
                </Form.Check>
                {/*========== Form.Check ==========*/}
                {/*========== Form.Check ==========*/}
                <Form.Check id="product-single-form-color-black">
                    <Form.Check.Input type='radio' value="black" name="color" onChange={propsformik.handleChange} />
                    <Form.Check.Label role="button" style={{background: 'black'}} />
                </Form.Check>
                {/*========== Form.Check ==========*/}
            </Form.Group>
        </div>
    )
}

export default FormColors