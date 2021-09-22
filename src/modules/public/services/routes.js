import Demo from "../components/demo-1";
import NotFound from "../components/not-found";

/**
 * run the route service with path and component with middleware
 * @param {Function} route 
 */
export default function publicRoutes (route) {
    route("/demo1" , Demo);
    route("/404" , NotFound);
}