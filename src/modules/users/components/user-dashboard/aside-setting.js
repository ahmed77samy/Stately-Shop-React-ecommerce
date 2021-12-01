import { Nav } from "react-bootstrap"
import AsideItem from "./aside-item"
import { DashBoardItems } from "./items"

function AsideSetting () {
    // map for DashBoardItems to create menu item
    const menuList = DashBoardItems.map((item , index) => {
        return (
            <AsideItem item={item} key={index} />
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <aside>
            <div className="aside__content">
                <Nav variant="pills" className="flex-column">
                    {menuList}
                </Nav>
            </div>
        </aside>
    )
}

export default AsideSetting