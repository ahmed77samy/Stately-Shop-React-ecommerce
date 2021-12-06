import ReactDOM from 'react-dom';
import { Router, Switch, Route , Redirect} from "react-router-dom";
import {createBrowserHistory} from "history"
import Middleware from './middleware';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./redux-services"
import NotifySystem, { addNotify } from './notification-service';
import ProductNotify from 'shared/components/notifications/product-notify';

let routesList = []
let history = createBrowserHistory()
export const store = createStore(reducers)

/**
 * get the params and save all route in routesList
 * @param {String} path 
 * @param {React.component} component 
 */
function addRouting (path, component, middleware) {
    routesList.push({path, component, middleware})
}

/**
 * loop on routesList and return all routes
 * @returns {React.component}
 */
function Routes() {
    const routes = routesList.map((route, index) => {
        return(
            <Route path={route.path} key={index} exact render={(props) => <Middleware route={route} history={history} props={props} />} />
        )
    })
    return (
        <Router history={history}>
            <Switch>
                {routes}
                <Redirect to="/pages/404" />
            </Switch>
        </Router>
    );
}

/**
 * init the route service
 * @returns {Function}
 */
function init () {
    const default_product = {
        pro_name: "products name item for test notifications", 
        mainImage: "uploads/products/img/product1.jpg",
        pro_des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
    setInterval(() => {
        addNotify({
            title: "someone purchased",
            message: <ProductNotify item={default_product} />,
            level: 'info',
            position: 'bl',
        })
    }, 10000);
    return(
        ReactDOM.render(
            <Provider store={store}>
                <Routes />
                <NotifySystem />
            </Provider>
            , document.getElementById('root')
        )
    )
}

/**
 * navigate to then given path
 * @param {string} path 
 */
export function NavigateTo(path) {
    history.push(path)
}

/**
 * navigate to then given path
 * @param {string} path 
 */
export function History() {
    return history
}

const RouteService = {
    init,
    provider: {
        name: "route",
        call: addRouting
    }
}


export default RouteService