import UserSearch from './user-search';
import UserAccount from './user-account';
import UserCart from './user-cart';
import UserWishlist from './user-wishlist';

function User() {
    return (
        <div className="header__user">
            <UserSearch />
            <UserAccount/>
            <UserWishlist />
            <UserCart />
        </div>
    )
}

export default User