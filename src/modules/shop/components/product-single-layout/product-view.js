import ViewBanner from "./view-banner"
import ViewContent from "./view-content"
import PropTypes from "prop-types"
import { Col, Row } from "react-bootstrap"

function ProductView (props) {
    return(
        <div className="product__view">
            <Row className="layout--space">
                <Col xs={12} lg={6}>
                    <ViewBanner item={props.item} />
                </Col>
                <Col xs={12} lg={6}>
                    <ViewContent item={props.item} />
                </Col>
            </Row>
        </div>
    )
}

ProductView.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductView