import { Col, Row } from "react-bootstrap"
import AsideProfileLeft from "./aside-profile-left"
import AsideProfileRight from "./aside-profile-right"
import ProfileContent from "./profile-content"

function UserProfile () {
    return (
        <div className="user__profile">
            <Row className="layout--space--30">
                <Col xs={12} lg={3}>
                    <AsideProfileLeft />
                </Col>
                <Col xs={12} lg={6}>
                    <ProfileContent />
                </Col>
                <Col xs={12} lg={3}>
                    <AsideProfileRight />
                </Col>
            </Row>
        </div>
    )
}

export default UserProfile