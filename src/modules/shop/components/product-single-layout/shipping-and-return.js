import { Col, Row } from "react-bootstrap"

function ShippingAndReturn () {
    return (
        <div className="shipping__and__return">
            <Row className="layout--space">
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <div className="tab__header">
                        <h5>Shipping</h5>
                    </div>
                    <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <div className="tab__header">
                        <h5>Warranty</h5>
                    </div>
                    <p className="m-0">If issues experienced with the frame include a manufacturer's defect, or an issue resulting from an inherent flaw in the product, RAEN provides a 365 day warranty from the time of purchase. If you feel your product meets these requirements, please email warranty@domain.com explaining the nature of your warranty claim and all necessary details.</p>
                </Col>
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <div className="tab__header">
                        <h5>Free FedEx 2-Day Shipping</h5>
                    </div>
                    <p className="m-0">Free FedEx 2-Day Shipping is available exclusively to the U.S. on orders over $150. FedEx 2-Day packages are delivered Monday through Friday.</p>
                </Col>
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <div className="tab__header">
                        <h5>Free Returns</h5>
                    </div>
                    <p className="m-0">Free returns are available on all U.S. order within 14 days of shipment.</p>
                </Col>
                {/*========== Col ==========*/}
            </Row>
        </div>
    )
}

export default ShippingAndReturn