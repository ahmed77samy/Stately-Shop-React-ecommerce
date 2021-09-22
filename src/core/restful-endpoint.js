import endpoint from './end-point';

export default class RestfulEndpoint {
    /**
     * Set the main module route
     * i.e /users
     * 
     * @var  {string}
     */
    route = '';

    /**
     * Fetch get record from endpoint api
     * @param   {number} id 
     * @param   {object} params 
     * @returns {Promise}
     */
    get(path, params) {
        return endpoint.get(this.route + path, params);
    }

    /**
     * Fetch post record from endpoint api
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    post(path , data) {
        return endpoint.post(this.route + path, data);
    }

    /**
     * Update existing record
     * 
     * @param   {number} id 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    put(id, data) {
        return endpoint.put(this.route + '/' + id, {
            data
        });
    }

    /**
     * Delete existing record
     * 
     * @param   {number} id 
     * @returns {Promise}
     */
    delete(id) {
        return endpoint.delete(this.route + '/' + id);
    }
}