import config from "shared/config" // eslint-disable-line no-unused-vars
import reportWebVitals from './reportWebVitals';
import serviceProvider from "./service-provider"
import RouteService from "./route-service"
import publicService from "modules/public/service"
import shopService from "modules/shop/service"
import userRoutes from "modules/users/service"
import ConfigService from './config-service';

class App {

    internalServiceList = [
        RouteService,
        ConfigService
    ]

    serviceList = [
        publicService,
        shopService,
        userRoutes,
    ]

    /**
     * register the internal service into app
     */
    internalRegister() {
        serviceProvider.internalRegister(this.internalServiceList)
    }

    /**
     * register service into th App
     */
    register() {
        serviceProvider.register(this.serviceList)
    }

    /**
     * init the app with the route service
     */
    ready() {
        serviceProvider.ready()
        RouteService.init()

        // // If you want to start measuring performance in your app, pass a function
        // // to log results (for example: reportWebVitals(console.log))
        // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();


    }
}

export default App