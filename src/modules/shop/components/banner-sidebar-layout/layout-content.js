import photo1 from "assets/images/bg/1.jpg"
import Banner from "shared/components/layout/banner"
import { Link } from "react-router-dom"
import Products from "./products"
import VisibleContent from "./visible-content"

function LayoutContent () {
    return (
        <div className="layout__content">
            <Banner className="dark--mode" bg={photo1} alt="shop-banner" width="100%" height={300}>
                <h5 className="text-uppercase h2">Stately shop</h5>
                <h2 className="text-capitalize mb-3 h1">banner with sidebar</h2>
                <Link to="/" className="anchors--reset btn__default btn--light btn--border">discover now</Link>
            </Banner>
            <VisibleContent />
            <Products />
        </div>
    )
}

export default LayoutContent