import { user_items } from "items"
import { Col, Container, Row, Tab } from "react-bootstrap"
import { useSelector } from "react-redux"
import AsideDashoard from "./aside-dashoard"
import ContentDashoard from "./content-dashboard"
import "./styles/dashboard-layout.scss"

function DashboardLayout (props) {
    const userdata = useSelector(state => state.userReducer.user)
    return (
        <section className="com--pd dashboard__layout">
            <Tab.Container id="user-dashboard-layout" defaultActiveKey={props.eventKey}>
                <Container>
                    <Row className="layout--space">
                        <Col xs={12} lg={4}>
                            <AsideDashoard user={userdata?.user} />
                        </Col>
                        <Col xs={12} lg={8}>
                            <ContentDashoard user={user_items[0]} />
                        </Col>
                    </Row>
                </Container>
            </Tab.Container>
        </section>
    )
}

export default DashboardLayout