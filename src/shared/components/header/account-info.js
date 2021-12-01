import ConfigService from "core/config-service";
import users from "modules/users/users";
import { Dropdown, DropdownButton } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { UserIcon, AccountIcon, SettingIcon, LogoutIcon } from "../elements/icons"

function AccountInfo () {
    const user_data = useSelector(state => state.userReducer.user.user);
    const main_root = ConfigService.config.get("endpoints.url")

    /**
     * log out user and navigation route
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        users.logout()
        window.location.replace("/user/account")
    }

    /**
     * {@inheritdoc}
     */
    return (
        <DropdownButton id="dropdown-basic" title={<UserIcon className="icon" />} variant="none">
            <Dropdown.Header>
                <img src={`${main_root}/${user_data.img}`} alt="user" />
                <div className="info">
                    <h4 className="h6 m-0">{user_data.Fname +" "+ user_data.Lname}</h4>
                    <span className="font--size--small">{user_data.email}</span>
                </div>
            </Dropdown.Header>
            <div className="items d-flex flex-column">
                <Dropdown.Item as={Link} to="/action-1"><AccountIcon className="icon mr-2" /> view profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/action-2"><SettingIcon className="icon mr-2" /> account setting</Dropdown.Item>
            </div>
            <div className="items d-flex flex-column">
                <Dropdown.Item as={Link} to="/action-1" onClick={handleClick}><LogoutIcon className="icon mr-2" /> log out</Dropdown.Item>
            </div>
        </DropdownButton>
    )
}

export default AccountInfo