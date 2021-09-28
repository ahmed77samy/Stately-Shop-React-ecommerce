import BannerSidebar from "../components/banner-sidebar";
import ProductSingle from "../components/product-single";

/**
 * run the route service with path and component
 * @param {Function} route 
 */
export default function shopRoutes (route) {
    route("/shop/banner-sidebar" , BannerSidebar);
    route("/shop/product-single" , ProductSingle);
}