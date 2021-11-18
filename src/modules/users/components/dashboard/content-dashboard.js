import { Tab } from "react-bootstrap"
import Card from "shared/components/layout/card"
import ContentItem from "./content-item"
import { DashBoardItems } from "./items"

function ContentDashoard () {

    // map for DashBoardItems to create content item
    const contentList = DashBoardItems.map((item, index) => {
        return (
            <ContentItem key={index} item={item} />
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

export default ContentDashoard