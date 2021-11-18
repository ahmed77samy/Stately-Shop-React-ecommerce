import photo1 from "assets/images/bg/1.jpg"
import { useState } from "react/cjs/react.development"
import Banner from "shared/components/layout/banner"
import Product from "./product"
import ProductSearch from "./product-search"
import VisibleContent from "./visible-content"

function LayoutContent (props) {
    const [sort , setSort] = useState("newest")
    const [visible , setVisible] = useState("grid")

    /**
     * handle sort if changed
     * @param {event} e 
     */
    const handleSort = (e) => {setSort(e)}
    /**
     * handle visble if changed
     * @param {event} e 
     */
    const handleVisible = (e) => {setVisible(e)}

    /**
     * {@inheritdoc}
     */
    return (
        <div className="layout__content">
            <Banner className="dark--mode" bg={photo1} alt="shop-banner" width="100%" height={300}>
                <h5 className="text-uppercase h2">Stately shop</h5>
                <h2 className="text-capitalize mb-3 h1">banner with sidebar</h2>
                <button to="/" className="anchors--reset btn__default btn--light btn--border">discover now</button>
            </Banner>
            <VisibleContent key_search={props.key_search} onSort={handleSort} onVisible={handleVisible} />
            {props.key_search ? <ProductSearch key_search={props.key_search} sort={sort} visible={visible} /> : <Product sort={sort} visible={visible} />}
        </div>
    )
}

export default LayoutContent