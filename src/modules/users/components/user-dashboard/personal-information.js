import { useSelector } from "react-redux"
import MyForm from "shared/components/elements/form"
import MyInput from "shared/components/elements/input"
import InfoItem from "./info-item"
import MyButton from "shared/components/elements/button"
import { FacebookIcon, GoogleIcon, TwitterIcon } from "shared/components/elements/icons"

function PersonalInformation () {
    const user_data = useSelector(state => state.userReducer.user.user)

    // initial Values to form Information
    let InformationValues = {Fname:user_data.Fname, Lname:user_data.Lname, email:user_data.email, website:user_data.website, city:user_data.city, phone:user_data.phone}

    /**
     * {@inheritdoc}
     */
    return (
        <div className="personal__information">
            {/*========== layouts--header ==========*/}
            <div className="layouts layouts--header">
                <div>
                    <h3 className="m-0 text-uppercase">personal information</h3>
                </div>
            </div>
            {/*========== layouts--header ==========*/}
            {/*========== layouts--body ==========*/}
            <div className="layouts layouts--body">
                <MyForm initialValues={InformationValues} id="form-user-personal-information">
                    {/*========== InfoItem ==========*/}
                    <InfoItem>
                        <label className="text-uppercase text--typo" htmlFor="personal-information-Fname">first name:</label>
                        <MyInput type="text" className="input__default" name="Fname" id="personal-information-Fname" />
                    </InfoItem>
                    {/*========== InfoItem ==========*/}
                    {/*========== InfoItem ==========*/}
                    <InfoItem>
                        <label className="text-uppercase text--typo" htmlFor="personal-information-Lname">last name:</label>
                        <MyInput type="text" className="input__default" name="Lname" id="personal-information-Lname" />
                    </InfoItem>
                    {/*========== InfoItem ==========*/}
                    {/*========== InfoItem ==========*/}
                    <InfoItem>
                        <label className="text-uppercase text--typo" htmlFor="personal-information-email">email address:</label>
                        <MyInput type="email" className="input__default" name="email" id="personal-information-email" />
                    </InfoItem>
                    {/*========== InfoItem ==========*/}
                    {/*========== InfoItem ==========*/}
                    <InfoItem>
                        <label className="text-uppercase text--typo" htmlFor="personal-information-website">website:</label>
                        <MyInput type="text" className="input__default" name="website" id="personal-information-website" />
                    </InfoItem>
                    {/*========== InfoItem ==========*/}
                    {/*========== InfoItem ==========*/}
                    <InfoItem>
                        <label className="text-uppercase text--typo" htmlFor="personal-information-city">your city:</label>
                        <MyInput type="text" className="input__default" name="city" id="personal-information-city" />
                    </InfoItem>
                    {/*========== InfoItem ==========*/}
                    {/*========== InfoItem ==========*/}
                    <InfoItem>
                        <label className="text-uppercase text--typo" htmlFor="personal-information-phone">Phone Number:</label>
                        <MyInput type="text" className="input__default" name="phone" id="personal-information-phone" />
                    </InfoItem>
                    {/*========== InfoItem ==========*/}
                    {/*========== social__item ==========*/}
                    <div className="social social__item">
                        <a href="https://www.facebook.com/me" target="_blank" rel="noopener noreferrer" className="anchors--reset facebook">
                            <FacebookIcon className='icon' />
                        </a>
                        <div>
                            <h6 className="font--size--small text-capitalize m-0 text--typo">your facebook account</h6>
                            <a href="https://www.facebook.com/me" target="_blank" rel="noopener noreferrer" className="anchors--reset">www.facebook.com/me</a>
                        </div>
                    </div>
                    {/*========== social__item ==========*/}
                    {/*========== social__item ==========*/}
                    <div className="social social__item">
                        <a href="/" target="_blank" rel="noopener noreferrer" className="anchors--reset twitter">
                            <TwitterIcon className='icon' />
                        </a>
                        <div>
                            <a href="/" target="_blank" rel="noopener noreferrer" className="anchors--reset text-capitalize">link with twitter</a>
                        </div>
                    </div>
                    {/*========== social__item ==========*/}
                    {/*========== social__item ==========*/}
                    <div className="social social__item">
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="anchors--reset google">
                            <GoogleIcon className='icon' />
                        </a>
                        <div>
                            <h6 className="font--size--small text-capitalize m-0 text--typo">your facebook account</h6>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="anchors--reset">www.google.com</a>
                        </div>
                    </div>
                    {/*========== social__item ==========*/}
                </MyForm>
            </div>
            {/*========== layouts--body ==========*/}
            {/*========== layouts--footer ==========*/}
            <div className="layouts layouts--footer">
                <MyButton type="submit" value="save information" className="btn__default btn--primary" form="form-user-personal-information" />
            </div>
            {/*========== layouts--footer ==========*/}
        </div>
    )
}

export default PersonalInformation