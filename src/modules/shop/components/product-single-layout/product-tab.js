import { Tab } from "react-bootstrap"
import Tabs from "shared/components/layout/tabs"
import SizeGuide from "./size-guide"
import PropTypes from "prop-types"
import Description from "./description"
import ShippingAndReturn from "./shipping-and-return"
import Reviews from "./reviews"
import users from "modules/users/users"
import { Link } from "react-router-dom"

function ProductTab (props) {
    let loggedIn = users.isLoggedIn();
    const { item } = props
    /**
     * {@inheritdoc}
     */
    return (
        <div className="product__tab">
            <Tabs defaultActiveKey="description" id="product-single-tabs">
                <Tab eventKey="description" title="description" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                    <Description item={item} />
                </Tab>
                <Tab eventKey="reviews" title="reviews" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                    {loggedIn ? <Reviews item={item} id={props.id} /> : <h6 className="text-capitalize text-center">Please <Link to="/user/account">login</Link> to be able to share reviews</h6>}
                </Tab>
                <Tab eventKey="size-guide" title="size guide" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                    <SizeGuide />
                </Tab>
                <Tab eventKey="shipping-and-return" title="shipping and return" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                    <ShippingAndReturn />
                </Tab>
            </Tabs>
        </div>
    )
}

ProductTab.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductTab