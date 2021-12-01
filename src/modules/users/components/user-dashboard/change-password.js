import { Link } from "react-router-dom"
import MyButton from "shared/components/elements/button"
import MyForm from "shared/components/elements/form"
import MyInput from "shared/components/elements/input"

function ChangePassword () {
    // initial Values to form Information
    let PasswordValues = {current_password:"", new_password:"", confirmation_new_password:""}

    /**
     * {@inheritdoc}
     */
    return (
        <div className="change__password">
            {/*========== layouts--header ==========*/}
            <div className="layouts layouts--header">
                <div>
                    <h3 className="m-0 text-uppercase">change password</h3>
                </div>
            </div>
            {/*========== layouts--header ==========*/}
            {/*========== layouts--body ==========*/}
            <div className="layouts layouts--body">
                <MyForm initialValues={PasswordValues} id="form-user-change-password">
                    <MyInput type="password" className="input__default" name="current_password" placeholder="Current Password" id="change-password-current-password" />
                    <MyInput type="password" className="input__default" name="new_password" placeholder="New Password" id="change-password-new-password" />
                    <MyInput type="password" className="input__default" name="confirmation_new_password" placeholder="Confirm New Password" id="change-password-confirmation-new-password" />
                </MyForm>
            </div>
            {/*========== layouts--body ==========*/}
            {/*========== layouts--footer ==========*/}
            <div className="layouts layouts--footer">
                <Link to="/" className="anchors--reset text-capitalize text--typo">forget password ?</Link>
                <MyButton type="submit" value="change password" className="btn__default btn--primary" form="form-user-change-password" />
            </div>
            {/*========== layouts--footer ==========*/}
        </div>
    )
}

export default ChangePassword