import BannerSidebar from "../components/banner-sidebar";
import Collections from "../components/collections";
import ProductSingle from "../components/product-single";



/**
 * run the route service with path and component
 * @param {Function} route 
 */
export default function shopRoutes (route) {
    route("/shop" , BannerSidebar);
    route("/shop/banner-sidebar" , BannerSidebar);
    route("/shop/banner-sidebar/:key_search" , BannerSidebar);
    route("/shop/product-single/:id" , ProductSingle);
    route("/shop/collections" , Collections);
}