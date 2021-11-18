import UserSearch from './user-search';
import UserAccount from './user-account';
import UserCart from './user-cart';
import UserWishlist from './user-wishlist';
import users from "modules/users/users"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function User() {
    let loggedIn = users.isLoggedIn();
    let userwishlist = useSelector(state => loggedIn && state.userReducer.user_wishlist)
    let usercart = useSelector(state => loggedIn && state.userReducer.user_cart)
    let token = useSelector(state => loggedIn && state.userReducer.user.access_token);
    let id = useSelector(state => loggedIn && state.userReducer.user.user.id);

    // fetch data user from API
    useEffect(() => {
        let isMounted = true
        if (loggedIn && !userwishlist && isMounted) {
            users.userFavourit(token ,id)
        }
        return () => isMounted = false;
    },[loggedIn, id])// eslint-disable-line react-hooks/exhaustive-deps

    // fetch data user from API
    useEffect(() => {
        let isMounted = true
        if (loggedIn && !usercart && isMounted) {
            users.userCart(token ,id)
        }
        return () => isMounted = false;
    },[loggedIn, id])// eslint-disable-line react-hooks/exhaustive-deps

    /**
     * {@inheritdoc}
     */
    return (
        <div className="header__user">
            <UserSearch />
            <UserAccount/>
            {
                loggedIn && (
                    <>
                        <UserWishlist user_wshl={userwishlist} />
                        <UserCart user_cart={usercart} />
                    </>

                )
            }
        </div>
    )
}

export default User