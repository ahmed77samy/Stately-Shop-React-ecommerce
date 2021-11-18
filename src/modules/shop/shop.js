import { store } from "core/route-service";
import { ADD_TO_CART } from "modules/users/services/actions";
import * as Yup from "yup"
import { FETCH_COLLECTION, FETCH_PRODUCT, STORE_REVIEWS } from "./services/actions";
import ShopApi from "./services/api"

class Shop {
    /**
     * ReviewSchema is contain on schema belongs to reviews
     */
    ReviewSchema = {
        re_rate: Yup.string().required('rating is required *'),
        re_des: Yup.string().required('comment is required *')
    }

    /**
     * CartSchema is contain on schema belongs to cart
     */
    CartSchema = {
        quantity: Yup.number().min(1,"Quantity must be correct").required('quantity is required *'),
        size_id: Yup.string().required('size_id is required *'),
        color_id: Yup.string().required('color_id is required *'),
    }

    /**
     *  fetch the products from ShopAPI
     */
    getProducts() {
        if(store.getState().shopReducer.products === null) {
            ShopApi.getProducts()
            .then(data => {
                store.dispatch(FETCH_PRODUCT(data.data.payload))
            })
            .catch(() => {
                store.dispatch(FETCH_PRODUCT())
            })
        }
    }

    /**
     *  fetch the collections from ShopAPI
     */
    getCollections() {
        if(store.getState().shopReducer.collections === null) {
            ShopApi.getCategories()
            .then(data => {
                store.dispatch(FETCH_COLLECTION(data.data.payload))
            })
            .catch(() => {
                store.dispatch(FETCH_COLLECTION())
            })
        }
    }

    /**
     * add the given data to store
     * @param {object} data 
     */
    addToCart(data) {
        store.dispatch(ADD_TO_CART(data))
    }

    /**
     * add the given data to store
     * @param {object} data 
     */
    addReview(data) {
        store.dispatch(STORE_REVIEWS(data));
    }
}


export default new Shop()