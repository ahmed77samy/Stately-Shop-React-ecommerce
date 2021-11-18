import { Tab } from "react-bootstrap"
import Card from "shared/components/layout/card"
import ContentItem from "./content-item"
import { DashBoardItems } from "./items"
import PropTypes from "prop-types"

function ContentDashoard (props) {

    // map for DashBoardItems to create content item
    const contentList = DashBoardItems.map((item, index) => {
        return (
            <ContentItem key={index} item={item} user={props.user} />
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="content__dashboard">
            <Card>
                <Tab.Content>
                    {contentList}
                </Tab.Content>
            </Card>
        </div>
    )
}

ContentDashoard.propTypes = {
    user: PropTypes.object.isRequired
}

export default ContentDashoard