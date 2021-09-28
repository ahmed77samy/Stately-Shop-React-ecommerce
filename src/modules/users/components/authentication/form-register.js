import { Link } from "react-router-dom"
import UserApi from "modules/users/services/api"
import MyForm from "shared/components/elements/form"
import MyInput from "shared/components/elements/input"
import FormSocial from "./form-social"
import * as Yup from "yup"
import { useState } from "react"
import { NavigateTo } from "core/route-service"
import MyButton from "shared/components/elements/button"
import Users from "modules/users/users"
import { Form } from "react-bootstrap"
import PropTypes from 'prop-types';

function FormRegister (props) {
    const [errors , setErrors] = useState({})
    const [waitreq , setWaitreq] = useState(false)
    let { toggle } = props
    
    // initial Values to form register
    let RegisterValues = {Fname:"", Lname:"", email:"", password:"", password_confirmation:""}
    
    // schema validation with yup shape
    let RegisterSchema = Yup.object().shape(Users.RegisterSchema)

    /**
     * send request register to api and handle actions
     * set the wait request to do actions with button
     * if success navigate to email verification
     * @param {object} values 
     */
    const handleSubmit = async (values) => {
        setWaitreq(true)
        try {
            let data = await UserApi.register(values)
            setWaitreq(false)
            if(data.status === 201) {
                NavigateTo("/user/account/emailverification")
            }
        } catch ({response}) {
            setWaitreq(false)
            setErrors(response.data.errors)
        }
    }

    /**
     * {@inheritdoc}
     */
    return (
        <MyForm 
            onSubmit={handleSubmit}
            validationSchema={RegisterSchema}
            initialValues={RegisterValues} 
        >
            <MyInput type="text" className="input__default" name="Fname" placeholder="First Name" errors={errors} />

            <MyInput type="text" className="input__default" name="Lname" placeholder="Last Name" errors={errors} />

            <MyInput type="email" className="input__default" name="email" placeholder="Your Email Address" errors={errors} />

            <MyInput type="password" className="input__default" name="password" placeholder="Your Password" errors={errors} />

            <MyInput type="password" className="input__default" name="password_confirmation" placeholder="confirm Password" errors={errors} />

            <MyButton value="register" waitrequest={`${waitreq}`} type="submit" className={`btn--reset btn__default btn--dark ${waitreq && 'disabled'}`} />

            <Form.Group className="text-center">
                <p className="text-capitalize">
                    already have an account? <Link to="/" className="anchors--reset" onClick={toggle}>login</Link>
                </p>
            </Form.Group>

            <div className="bg--neutral--200 hr--1 hr--after" data-after="Or Register With" />
            
            <FormSocial />
        </MyForm>
    )
}

FormRegister.propTypes = {
    toggle: PropTypes.func.isRequired,
    className: PropTypes.string,
};


export default FormRegister
