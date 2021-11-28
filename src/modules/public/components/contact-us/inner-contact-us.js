import { Col, Container, Row } from "react-bootstrap"
import { EmailIcon, LocationIcon, PhoneIcon } from "shared/components/elements/icons"
import Card from "shared/components/layout/card"
import SecHeader from "shared/components/layout/sec-header"
import "./styles/inner-contact-us.scss"

function InnerContactUs () {
    return (
        <section className="com--pd inner__contact__us">
            <Container>
                {/*========== SecHeader ==========*/}
                <SecHeader
                    title="contact us"
                    description='Got a question? We had love to hear from you. Send us a message and we will respond as soon as possible.'
                    className="header--center"
                />
                {/*========== SecHeader ==========*/}
                {/*========== sec__content ==========*/}
                <div className="sec__content">
                    <Card>
                        <Row className="layout--space">
                        <Col xs={12}><h4 className="text-center text-capitalize m-0">Get In Touch</h4></Col>
                            <Col xs={12} md={4} className="text-center">
                                <div className="contact__item">
                                        <LocationIcon className="icon" />
                                        <p className="m-0">Calista Wise 7292 Str,</p>
                                        <p className="m-0">Sample State. Sample city</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="text-center">
                                <div className="contact__item">
                                    <PhoneIcon className="icon" />
                                    <p className="m-0">Phone: +14 1800-000-000</p>
                                    <p className="m-0">Fax: +14 1800-000-000</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="text-center">
                                <div className="contact__item">
                                    <EmailIcon className="icon" />
                                    <p className="m-0">info@yourdomain.com</p>
                                    <p className="m-0">youdomain@gmai.com</p>
                                </div>
                            </Col>
                            <Col xs={12}><h4 className="text-center text-capitalize m-0">Drop Us Message</h4></Col>
                            <Row className="w-100 px-4 m-0 layout--space--20" as='form'>
                                <Col xs={12} md={6}>
                                    <input className="input__default w-100" placeholder="Your Name" />
                                    <input className="input__default w-100" placeholder="Your Email Address" />
                                    <input className="input__default w-100" placeholder="Your Mobile" />
                                </Col>
                                <Col xs={12} md={6}>
                                    <textarea className="input__default input__textarea w-100" placeholder="Your Message Here" />
                                </Col>
                                <Col xs={12}>
                                    <button className="btn__default btn--primary mx-auto mt-4">send message</button>
                                </Col>
                            </Row>
                        </Row>
                    </Card>
                </div>
                {/*========== sec__content ==========*/}
            </Container>
        </section>
    )
}

export default InnerContactUs