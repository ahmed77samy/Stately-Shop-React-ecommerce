import Card from "shared/components/layout/card"
import { Col, Row, Tab } from "react-bootstrap"
import AsideSetting from "./aside-setting"
import ContentSetting from "./content-setting"
import { DashBoardItems } from "./items"

function UserSetting () {
    return (
        <div className="user__setting">
            <Row className="layout--space--20">
                <Tab.Container id="left-tabs-account--setting" defaultActiveKey={DashBoardItems[0].eventKey}>
                    <Col xs={12} lg={3}>
                        <Card className="p-0 h-auto">
                            <AsideSetting />
                        </Card>
                    </Col>
                    <Col xs={12} lg={9}>
                        <Card className="h-auto">
                            <ContentSetting />
                        </Card>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}


export default UserSetting