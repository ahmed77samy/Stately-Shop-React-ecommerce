import { NavigateTo } from "core/route-service";
import MyAccount from "../components/my-account";
import user from "../users";
import User from "../components/user";
import UserCart from "../components/user-cart";
import UserWishlist from "../components/user-wishlist";
import UserSetting from "../components/user-setting";
import UserReviews from "../components/user-reviews";
import UserOrders from "../components/user-orders.js";

/**
 * middleware checked on logged In
 * @returns {Function}
 */
function isLoggedIn() {
    let status = user.isLoggedIn()
    return status === true && function () {NavigateTo("/user")}
}

/**
 * middleware checked on logged Out
 * @returns {Function}
 */
function isLoggedOut() {
    let status = user.isLoggedIn()
    return status !== true && function () {NavigateTo("/user/account")}
}


/**
 * run the route service with path and component with middleware
 * @param {Function} route 
 */
export default function userRoutes (route) {
    route("/user/account" , MyAccount, [isLoggedIn]);
    route("/user" , User, [isLoggedOut]);
    route("/user/cart" , UserCart, [isLoggedOut]);
    route("/user/favourites" , UserWishlist, [isLoggedOut]);
    route("/user/setting" , UserSetting, [isLoggedOut]);
    route("/user/reviews" , UserReviews, [isLoggedOut]);
    route("/user/orders" , UserOrders, [isLoggedOut]);
}