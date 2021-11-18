import { NavigateTo } from "core/route-service";
import MyAccount from "../components/my-account";
import user from "../users";
import User from "../components/user";

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
    route("/user/:Key" , User, [isLoggedOut]);
}