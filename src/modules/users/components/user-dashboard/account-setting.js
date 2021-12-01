import { Field } from "formik"
import MyButton from "shared/components/elements/button"
import MyForm from "shared/components/elements/form"

function AccountSetting () {
    // initial Values to form Settings
    let SettingValues = {notifications_sound:true, notifications_email:true, friends_birthdays:true, chat_sound:true}

    /**
     * toggle active class
     * reverse the value
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.target.classList.toggle('active')
        e.target.value = !e.target.value
    }

    /**
     * {@inheritdoc}
     */
    return (
        <div className="account__setting">
            {/*========== layouts--header ==========*/}
            <div className="layouts layouts--header">
                <div>
                    <h3 className="m-0 text-uppercase">account setting</h3>
                </div>
            </div>
            {/*========== layouts--header ==========*/}
            {/*========== layouts--body ==========*/}
            <div className="layouts layouts--body">
                <MyForm className="d-flex flex-column" initialValues={SettingValues} id="form-user-account-setting">
                    {/*========== setting__item ==========*/}
                    <div className="setting__item">
                        <div>
                            <h6>Notifications Sound</h6>
                            <span>A sound will be played each time you receive a new activity notification</span>
                        </div>
                        <Field type="checkbox" name="notifications_sound" role="button" value={true} className="active" onClick={handleClick} />
                    </div>
                    {/*========== setting__item ==========*/}
                    {/*========== setting__item ==========*/}
                    <div className="setting__item">
                        <div>
                            <h6>Notifications Email</h6>
                            <span>We’ll send you an email to your account each time you receive a new activity notification</span>
                        </div>
                        <Field type="checkbox" name="notifications_email" role="button" value={true} className="active" onClick={handleClick} />
                    </div>
                    {/*========== setting__item ==========*/}
                    {/*========== setting__item ==========*/}
                    <div className="setting__item">
                        <div>
                            <h6>Friend’s Birthdays</h6>
                            <span>Choose wheather or not receive notifications about your friend’s birthdays on your newsfeed</span>
                        </div>
                        <Field type="checkbox" name="friends_birthdays" role="button" value={true} className="active" onClick={handleClick} />
                    </div>
                    {/*========== setting__item ==========*/}
                    {/*========== setting__item ==========*/}
                    <div className="setting__item">
                        <div>
                            <h6>Chat Message Sound</h6>
                            <span>A sound will be played each time you receive a new message on an inactive chat window</span>
                        </div>
                        <Field type="checkbox" name="chat_sound" role="button" value={true} className="active" onClick={handleClick} />
                    </div>
                    {/*========== setting__item ==========*/}
                </MyForm>
            </div>
            {/*========== layouts--body ==========*/}
            {/*========== layouts--footer ==========*/}
            <div className="layouts layouts--footer">
                <MyButton value="save attributes" className="btn__default btn--primary" form="form-user-account-setting" />
            </div>
            {/*========== layouts--footer ==========*/}
        </div>
    )
}

export default AccountSetting