import Card from "shared/components/layout/card"
import MenuItem from "./menu-item"
import { Nav } from "react-bootstrap"
import { DashBoardItems } from "./items"
import { BarsIcon } from "shared/components/elements/icons"
import BorderLoading from "shared/components/elements/border-loading"
import AsideInterface from "./aside-interface"

function AsideDashoard (props) {
    // map for DashBoardItems to create menu item
    const menuList = DashBoardItems.map((item , index) => {
        return (
            <MenuItem item={item} key={index} />
        )
    })

    /**
     * toggle class active for aside__menu
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.target.closest(".aside__dashboard").querySelector(".aside__menu").classList.toggle("active")
    }

    /**
     * {@inheritdoc}
     */
    return (
        <aside className="aside__dashboard">
            <Card className="p-0">
                {
                    props.user ? <AsideInterface user={props.user} /> : <div className="aside__interface text-center"><BorderLoading /></div>
                }

                {/*========== aside__menu ==========*/}
                <button className="btn--reset mx-auto btn__default btn--primary d-lg-none mb-5" onClick={handleClick}>
                    <BarsIcon className="icon mr-2" /> account menu
                </button>
                <div className="aside__menu d-lg-block">
                    <div className="aside__header">
                        <h5 className="h6 m-0">dashboard</h5>
                    </div>
                    <Nav variant="pills" className="flex-column">
                        {menuList}
                    </Nav>
                    {/* <div className="aside__header">
                        <h5 className="h6 m-0">account settings</h5>
                    </div>
                    <Nav variant="pills" className="flex-column">
                        {menuList}
                    </Nav> */}
                </div>
                {/*========== aside__menu ==========*/}
            </Card>
        </aside>
    )
}

export default AsideDashoard