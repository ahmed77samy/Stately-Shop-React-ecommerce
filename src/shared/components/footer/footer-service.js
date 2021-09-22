import { Col, Container, Row } from "react-bootstrap"
import {service_items} from "./items"

function FooterService () {

    /**
     * map for items to given the service items
     */
    const serviceList = service_items.map((item , index) => {
        let {Icon, title, description} = item
        return (
            <Col xs={12} sm={6} lg={3} key={index}>
                <div className="service__item">
                    <Icon className='icon' />
                    <div>
                        <h5 className="h6 m-0 text-capitalize">{title}</h5>
                        <span className="font--size--small">{description}</span>
                    </div>
                </div>
            </Col>
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <section className="com--pd bg--white">
            <Container>
                <div className="footer__service">
                    <Row className="layout--space--30">
                        {serviceList}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default FooterService