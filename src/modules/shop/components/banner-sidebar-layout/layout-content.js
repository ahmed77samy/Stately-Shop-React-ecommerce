import photo1 from "assets/images/bg/1.jpg"
import Banner from "shared/components/layout/banner"
import Product from "./product"
import VisibleContent from "./visible-content"

function LayoutContent () {
    return (
        <div className="layout__content">
            <Banner className="dark--mode" bg={photo1} alt="shop-banner" width="100%" height={300}>
                <h5 className="text-uppercase h2">Stately shop</h5>
                <h2 className="text-capitalize mb-3 h1">banner with sidebar</h2>
                <button to="/" className="anchors--reset btn__default btn--light btn--border">discover now</button>
            </Banner>
            <VisibleContent />
            <Product />
        </div>
    )
}

export default LayoutContent