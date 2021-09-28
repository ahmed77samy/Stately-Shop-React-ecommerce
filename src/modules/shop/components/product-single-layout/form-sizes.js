import { Form } from "react-bootstrap";

function FormSizes (props) {
    const { propsformik } = props

    /**
     * {@inheritdoc}
     */
    return(
        <div className="sizes">
            <Form.Group>
                <label>size:&nbsp;&nbsp;
                    {propsformik.values.size === "" ? <span>Is Required!</span> : <span className="text--primary--500">{propsformik.values.size}</span>}
                </label>
                {/*========== Form.Check ==========*/}
                <Form.Check id="product-single-form-size-s">
                    <Form.Check.Input type='radio' value="small" name="size" onChange={propsformik.handleChange}  role="button" />
                    <Form.Check.Label role="button">s</Form.Check.Label>
                </Form.Check>
                {/*========== Form.Check ==========*/}
                {/*========== Form.Check ==========*/}
                <Form.Check id="product-single-form-size-m">
                    <Form.Check.Input type='radio' value="medium" name="size" onChange={propsformik.handleChange}  role="button" />
                    <Form.Check.Label role="button">m</Form.Check.Label>
                </Form.Check>
                {/*========== Form.Check ==========*/}
                {/*========== Form.Check ==========*/}
                <Form.Check id="product-single-form-size-l">
                    <Form.Check.Input type='radio' value="large" name="size" onChange={propsformik.handleChange}  role="button" />
                    <Form.Check.Label role="button">l</Form.Check.Label>
                </Form.Check>
                {/*========== Form.Check ==========*/}
            </Form.Group>
        </div>
    )
}

export default FormSizes