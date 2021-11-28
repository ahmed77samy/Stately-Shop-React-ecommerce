import users from 'modules/users/users';
import AccountAuth from './account-auth';
import AccountInfo from './account-info';

function UserAccount () {
    let loggedIn = users.isLoggedIn()

    /**
     * {@inheritdoc}
     */
    return (
        <div className="user__account">
            {loggedIn ? <AccountInfo /> : <AccountAuth /> }
        </div>
    )
}

export default UserAccount