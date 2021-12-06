import { Col, Row } from "react-bootstrap"
import FooterItem from "./footer-item"
import { about_items, information_items, personal_items } from "./items"
import ListItem from "./list-item"

function FooterLinks() {

    // map for items to given the list items
    const personalList = personal_items.map((item , index) => {
        return (
            <ListItem key={index} item={item} />
        )
    })
    // map for items to given the list items
    const informationList = information_items.map((item , index) => {
        return (
            <ListItem key={index} item={item} />
        )
    })
    // map for items to given the list items
    const aboutList = about_items.map((item , index) => {
        return (
            <ListItem key={index} item={item} />
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="footer__links">
            <Row className="layout--space">
                {/*========== FooterItem ==========*/}
                <Col xs={12} sm={6} lg={3}>
                    <FooterItem title="personal">
                        <ul className="list-unstyled m-0">
                            {personalList}
                        </ul>
                    </FooterItem>
                </Col>
                {/*========== FooterItem ==========*/}
                {/*========== FooterItem ==========*/}
                <Col xs={12} sm={6} lg={3}>
                    <FooterItem title="information">
                        <ul className="list-unstyled m-0">
                            {informationList}
                        </ul>
                    </FooterItem>
                </Col>
                {/*========== FooterItem ==========*/}
                {/*========== FooterItem ==========*/}
                <Col xs={12} sm={6} lg={3}>
                    <FooterItem title="about us">
                        <ul className="list-unstyled m-0">
                            {aboutList}
                        </ul>
                    </FooterItem>
                </Col>
                {/*========== FooterItem ==========*/}
                {/*========== FooterItem ==========*/}
                <Col xs={12} sm={6} lg={3}>
                    <FooterItem title="personal">
                        <ul className="list-unstyled m-0">
                            {informationList}
                        </ul>
                    </FooterItem>
                </Col>
                {/*========== FooterItem ==========*/}
            </Row>
        </div>
    )
}

export default FooterLinks