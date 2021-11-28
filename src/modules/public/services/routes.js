import AboutUs from "../components/about-us";
import ArticleGrid from "../components/article-grid";
import ArticleList from "../components/article-list";
import ArticleSingle from "../components/article-single";
import ContactUs from "../components/contact-us";
import Demo from "../components/demo-1";
import NotFound from "../components/not-found";

/**
 * run the route service with path and component with middleware
 * @param {Function} route 
 */
export default function publicRoutes (route) {
    route("/demo1" , Demo);
    route("/about-us" , AboutUs);
    route("/article-grid" , ArticleGrid);
    route("/article-list" , ArticleList);
    route("/article-single" , ArticleSingle);
    route("/contact-us" , ContactUs);
    route("/404" , NotFound);
}