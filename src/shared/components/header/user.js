import UserSearch from './user-search';
import UserAccount from './user-account';
import UserCart from './user-cart';
import UserWishlist from './user-wishlist';
import users from "modules/users/users"
import { useEffect } from 'react';
import UserApi from "modules/users/services/api"
import { useSelector ,useDispatch } from 'react-redux';
import { USER_CART, USER_FAVOURIT } from 'modules/users/services/actions';

function User() {
    let dispatch = useDispatch();
    let loggedIn = users.isLoggedIn();
    let userwishlist = useSelector(state => loggedIn && state.userReducer.user_wishlist)
    let usercart = useSelector(state => loggedIn && state.userReducer.user_cart)
    let token = useSelector(state => loggedIn && state.userReducer.user.access_token);
    let id = useSelector(state => loggedIn && state.userReducer.user.user.id);

    useEffect(() => {
        // fetch data user wishlist from API
        function fetchUserWishlist () {
            UserApi.userFavourit(token ,id)
            .then(({data}) => {
                dispatch(USER_FAVOURIT(data.payload))
            })
            .catch(() => {
                dispatch(USER_FAVOURIT())
            })
        }
        // fetch data user wishlist from API
        function fetchUserCart () {
            UserApi.userCart(token ,id)
            .then(({data}) => {
                dispatch(USER_CART(data.payload))
            })
            .catch(() => {
                dispatch(USER_CART())
            })
        }
        if (loggedIn && !userwishlist) {
            fetchUserWishlist()
        }
        if (loggedIn && !usercart) {
            fetchUserCart()
        }
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