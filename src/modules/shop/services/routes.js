import BannerSidebar from "../components/banner-sidebar";

/**
 * run the route service with path and component
 * @param {Function} route 
 */
export default function shopRoutes (route) {
    route("/shop/banner-sidebar" , BannerSidebar);
}