import endPoint from "core/end-point";

class ShopApi {    
    /**
     * Set the main module route
     * @var  {string}
     */
    route = '/api';

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
     * called getProducts request
     * @returns {Promise}
     */
    getProducts () {
        return endPoint.get(this.route + '/products');
    }

    /**
     * called show one product request
     * @returns {Promise}
     */
    showProduct (id) {
        return endPoint.get(this.route + `/products/${id}`);
    }

    /**
     * called search for product request
     * @returns {Promise}
     */
    searchProduct (value) {
        return endPoint.get(this.route + `/products/search/${value}`);
    }

    /**
     * called show default size product request
     * @returns {Promise}
     */
    showDefaultSize (id) {
        return endPoint.get(this.route + `/sizes/${id}`);
    }

    /**
     * called show sizes's product request
     * @returns {Promise}
     */
    showSizes (id) {
        return endPoint.get(this.route + `/getproductSizes/${id}`);
    }

    /**
     * called show default color product request
     * @returns {Promise}
     */
    showDefaultColor (id) {
        return endPoint.get(this.route + `/colors/${id}`);
    }

    /**
     * called show sizes's product request
     * @returns {Promise}
     */
    showColors (id) {
        return endPoint.get(this.route + `/getproductColors/${id}`);
    }

    /**
     * called get product's review request
     * @param {string} id 
     * @returns {Promise}
     */
    ProductReview (id) {
        return endPoint.get(this.route + `/products/${id}/reviews`);
    }

    /**
     * called store reviews's request
     * @param {object} Values 
     * @param {string} Token 
     * @returns {Promise}
     */
    storeReview(Values, Token) {
        return endPoint.post(this.route + "/reviews", this.FormData(Values), {
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        });
    }

    /**
     * called getCategories request
     * @returns {Promise}
     */
    getCategories () {
        return endPoint.get(this.route + '/categories');
    }
    /**
     * called show one category request
     * @returns {Promise}
     */
    showCategory (id) {
        return endPoint.get(this.route + `/categories/${id}`);
    }

    /**
     * called add to cart request
     * @param {object} Values 
     * @param {string} Token 
     * @returns {Promise}
     */
    addToCart(Values, Token) {
        return endPoint.post(this.route + "/carts", this.FormData(Values), {
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        });
    }
}

export default new ShopApi()