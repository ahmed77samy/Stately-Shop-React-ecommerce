import Cache from "core/cache"
import UserApi from "./services/api"
import * as Yup from "yup"
import { EXIT_USER, FETCH_USER, USER_CART, USER_FAVOURIT } from "./services/actions"
import { store } from "core/route-service"

class Users {
    constructor() {
        this.userData = Cache.get("USERTOKEN")
    }
    /**
     * validation object is contain all validation that belongs to authentication
     */
    validation= {
        Fname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        Lname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
        password_confirmation: Yup.string().test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value
        })
    }
    /**
     * LoginSchema is contain on schema belongs to login
     */
    LoginSchema = {
        email: this.validation.email,
        password: this.validation.password,
    }
    /**
     * LoginSchema is contain on schema belongs to register
     */
    RegisterSchema = {
        Fname: this.validation.Fname,
        Lname: this.validation.Lname,
        email: this.validation.email,
        password: this.validation.password,
        password_confirmation: this.validation.password_confirmation
    }

    /**
     * check userData is found
     * send request to safe realtime
     * @returns {boolean}
     */
    isLoggedIn() {
        let user = store.getState().userReducer.user;
        if(user !== null) {
            if(user.access_token === this.userData) {
                return true
            } else {
                return false
            }
        }
        return false
    }

    /**
     * add the given token to cache and store
     * @param {string} Token 
     */
    login (data) {
        this.userData = data.access_token
        Cache.set('USERTOKEN' , data.access_token)
        store.dispatch(FETCH_USER(data));
    }

    /**
     * remove user data from cache and store
     */
    logout() {
        Cache.remove("USERTOKEN")
        this.userData = undefined
        store.dispatch(EXIT_USER());
    }

    /**
     * check if the userData is existing
     * use the api realtime
     * @returns {Promise}
     */
    refresh() {
        return new Promise((resolve) => {
            if(this.userData) {
                this.userData = Cache.get("USERTOKEN")
                UserApi.realTime(this.userData)
                .then((data) => {
                    this.login(data.data)
                    return resolve(data.data)
                })
                .catch(() => {
                    this.logout()
                    return resolve()
                })
            } else {
                return resolve()
            }
        })
    }

    /**
     * fetch request user favourit from UserApi
     * @param {string} Token 
     * @param {string} userid 
     */
    userFavourit (Token ,userid) {
        if(store.getState().userReducer.user_wishlist === null) {
            UserApi.userFavourit(Token ,userid)
            .then(({data}) => {
                store.dispatch(USER_FAVOURIT(data.payload))
            })
            .catch(() => {
                store.dispatch(USER_FAVOURIT())
            })
        }
    }

    /**
     * fetch request user cart from UserApi
     * @param {string} Token 
     * @param {string} userid 
     */
    userCart (Token ,userid) {
        if(store.getState().userReducer.user_cart === null) {
            UserApi.userCart(Token ,userid)
            .then(({data}) => {
                store.dispatch(USER_CART(data.payload))
            })
            .catch(() => {
                store.dispatch(USER_CART())
            })
        }
    }
}


export default new Users()