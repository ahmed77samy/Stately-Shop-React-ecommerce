import { useState } from "react"
import HeaderItems from "./items"
import ItemsList from "./items-list"
import NavBarItemsListGroup from "./nav-bar-items-list-group"
import Logo from "../elements/logo"
import {BarsIcon , TimesIcon} from "shared/components/elements/icons"
import { Modal } from "react-bootstrap"
import HeaderModal from "../modals/header-modal"

function NavBar() {
    const [modal, setModal] = useState(false)

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    // map for items to create list items and list items group
    let barItemsList = HeaderItems.map((item , index) => {
        if(item.items) {
            return <NavBarItemsListGroup item={item} key={index} />
        }
        return <ItemsList item={item} key={index} />
    })
    /**
     * {@inheritdoc}
     */
    return (
        <div className="user__navbar d-lg-none">
            {/*========== wrapper__badge ==========*/}
            <div className="wrapper__badge">
                <BarsIcon className="icon" onClick={toggleModal} />
            </div>
            {/*========== wrapper__badge ==========*/}
            {/*========== Modal ==========*/}
            <HeaderModal className="modal--left" show={modal} onHide={toggleModal} animation={false}>
                <Modal.Header className="dark--mode">
                    <Modal.Title><Logo foreground="light" /></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                <Modal.Body>
                    <ul className="list-unstyled m-0">
                        {barItemsList}
                    </ul>
                </Modal.Body>
            </HeaderModal>
            {/*========== Modal ==========*/}
        </div>
    )
}


export default NavBar