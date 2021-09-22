import React from "react"
import HeaderItems from "./items"
import ItemsList from "./items-list"
import ItemsListDrop from "./items-list-drop"

function Nav() {
    // map for HeaderItems to create list items and list items drop
    let navItemsList = HeaderItems.map((item , index) => {
        if(item.items) {
            return <ItemsListDrop item={item} key={index} />
        }
        return <ItemsList item={item} key={index} />
    })
    /**
     * {@inheritdoc}
     */
    return (
        <nav className="header__nav">
            <ul className="list-unstyled m-0">
                {navItemsList}
            </ul>
        </nav>
    )
}

export default Nav