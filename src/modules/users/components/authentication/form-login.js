import { Link } from "react-router-dom"
import UserApi from "modules/users/services/api"
import MyForm from "shared/components/elements/form"
import MyInput from "shared/components/elements/input"
import FormSocial from "./form-social"
import * as Yup from "yup"
import { useState } from "react"
import MyButton from "shared/components/elements/button"
import Users from "modules/users/users"
import { Form } from "react-bootstrap"
import PropTypes from 'prop-types';

function FormLogin (props) {
    const [errors , setErrors] = useState({})
    const [waitreq , setWaitreq] = useState(false)
    
    let { toggle } = props

    // initial Values to form register
    let LoginValues = {email:"", password:""}

    // schema validation with yup shape
    let LoginSchema = Yup.object().shape(Users.LoginSchema)
    
    /**
     * send request login to api and handle actions
     * set the wait request to do actions with button
     * if success navigate to email verification
     * @param {object} values 
     */
    const handleSubmit = async (values) => {
        setWaitreq(true)
        try {
            let data = await UserApi.login(values)
            setWaitreq(false)
            if(data.status === 200) {
                Users.login(data.data)
                if(window.location.pathname === "/user/account") {
                    window.location.replace("/user")
                } else {
                    window.location.reload()
                }
            }
        } catch ({response}) {
            setWaitreq(false)
            if(response.data.error === "Unauthorized") {
                setErrors({email: "email or password is invalid"})
            } else {
                setErrors({email: response.data.error})
            }
        }
    }

    /**
     * {@inheritdoc}
     */
    return(
        <MyForm 
            onSubmit={handleSubmit}
            initialValues={LoginValues}
            validationSchema={LoginSchema}
            {...props}
        >
            <MyInput type="email" className="input__default" name="email" placeholder="Your Email Address" errors={errors} />

            <MyInput type="password" className="input__default" name="password" placeholder="Your Password" errors={errors} />
            
            <MyButton value="login" waitrequest={`${waitreq}`} type="submit" className={`btn--reset btn__default btn--dark ${waitreq && 'disabled'}`} />
            
            <Form.Group className="text-center">
                <p className="text-capitalize">
                    <Link to="/" className="anchors--reset">forget your password?</Link>
                </p>
                <p className="text-capitalize">
                    don't have an account? <Link to="/" className="anchors--reset" onClick={toggle}>register</Link>
                </p>
            </Form.Group>
            
            <div className="bg--neutral--200 hr--1 hr--after" data-after="or Login With" />
            
            <FormSocial />
        </MyForm>
    )
}

FormLogin.propTypes = {
    toggle: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default FormLogin