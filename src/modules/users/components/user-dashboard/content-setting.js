import { Tab } from "react-bootstrap"
import ContentItem from "./content-item"
import { DashBoardItems } from "./items"

function ContentSetting () {
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
        <div className="content__setting">
            <Tab.Content>
                {contentList}
            </Tab.Content>
        </div>
    )
}

export default ContentSetting