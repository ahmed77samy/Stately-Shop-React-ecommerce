import {combineReducers} from 'redux'
import shopReducer from "modules/shop/services/reducer"
import userReducer from "modules/users/services/reducer"

const Reducers = combineReducers({shopReducer , userReducer})
export default Reducers