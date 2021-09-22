import { Field } from "formik"
import { Form } from "react-bootstrap"
import { useEffect } from "react/cjs/react.development"
import PropTypes from 'prop-types';

function MyInput (props) {

    let { propsformik , name , errors } = props

    /**
     * {@inheritdoc}
     */
    useEffect(() => {
        if(errors && errors[name]) {
            propsformik.setFieldError(name,errors[name])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors])

    /**
     * {@inheritdoc}
     */
    return (
        <Form.Group>
            {propsformik.touched[name] && <label className="font--size--small filed__error">{propsformik.errors[name]}</label>}
            <Field onChange={propsformik.handleChange} onBlur={propsformik.handleBlur} {...props} />
        </Form.Group>
    )
}

MyInput.proptypes = {
    propsformik: PropTypes.object.isRequired,
    errors: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
}

export default MyInput