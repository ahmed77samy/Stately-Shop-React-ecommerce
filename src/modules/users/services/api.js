import RestfulEndpoint from "core/restful-endpoint"

class UserApi extends RestfulEndpoint {
    route = '/api/auth';

    FormData (data) {
        var form_data = new FormData();
        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
        return form_data
    }

    register (values) {
        return this.post("/register" , this.FormData(values) )
    }
    
    login (values) {
        return this.post("/login" , this.FormData(values))
    }

}

export default new UserApi()