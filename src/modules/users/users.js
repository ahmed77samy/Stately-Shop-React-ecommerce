import Cache from "core/cache"
import { NavigateTo , History } from "core/route-service"
import * as Yup from "yup"

class Users {
    constructor() {
        this.userData = Cache.get("USERTOKEN")
        this.history = History()
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
    registerSchema = {
        Fname: this.validation.Fname,
        Lname: this.validation.Lname,
        email: this.validation.email,
        password: this.validation.password,
        password_confirmation: this.validation.password_confirmation
    }
    
    isLoggedIn() {
        if(this.userData) {
            return true
        }
        return false
    }

    /**
     * add the given token to cache but not send request
     * navigate to ...
     * @param {string} Token 
     */
    login (Token) {
        this.userData = Token
        Cache.set('USERTOKEN' , Token)
        NavigateTo("/user")
    }

    /**
     * remove user data from cache and log out
     */
    logout() {
        Cache.remove("USERTOKEN")
        this.userData = undefined
    }
}


export default new Users()