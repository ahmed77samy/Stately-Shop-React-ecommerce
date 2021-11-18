import endPoint from "core/end-point";

class UserApi {    
    /**
     * Set the main module AuthRoute
     * @var  {string}
     */
    AuthRoute = '/api/auth';
    UsersRoute = '/api/users';

    /**
     * convert form-urlencoded to form-data
     * @param {Object} data 
     * @returns {FormData}
     */
    FormData (data) {
        var form_data = new FormData();
        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
        return form_data
    }

    /**
     * called register request
     * @param {String} path 
     * @param {Object} data 
     * @returns {Promise}
     */
    register (values) {        
        return endPoint.post(this.AuthRoute + '/register', this.FormData(values));
    }

    /**
     * called login request
     * @param {String} path 
     * @param {Object} data 
     * @returns {Promise}
     */
    login (values) {
        return endPoint.post(this.AuthRoute + '/login', this.FormData(values));
    }

    /**
     * called realTime request
     * @param {String} token 
     * @returns {Promise}
     */
    realTime(Token) {
        return endPoint.post(this.AuthRoute + '/refresh', null, {
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        });
    }

    /**
     * called get users request
     * @param {string} Id 
     * @param {string} Token 
     * @returns {Promise}
     */
    getUsers(Id, Token) {
        return endPoint.get(this.UsersRoute + `/${Id}`, {
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        });
    }

    /**
     * called user's favourit request
     * @param {String} Token 
     * @param {Number} userid 
     * @returns {Promise}
     */
    userFavourit(Token ,userid) {
        return endPoint.get(this.UsersRoute + `/${userid}/favorite`, {
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        });
    }
    
    /**
     * called user's cart request
     * @param {String} Token 
     * @param {Number} userid 
     * @returns {Promise}
     */
    userCart(Token ,userid) {
        return endPoint.get(this.UsersRoute + `/${userid}/cart`, {
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        });
    }

}

export default new UserApi()