import { useState } from "react"
import { Modal } from "react-bootstrap";
import { TimesIcon, UserIcon } from "../elements/icons";
import HeaderModal from "../modals/header-modal";
import UserAccountAuth from "./user-account-auth";

function AccountAuth () {
    const [modal , setModal] = useState(false)

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    /**
     * {@inheritdoc}
     */
    return (
        <>
            <div className="wrapper__badge">
                <UserIcon className="icon" onClick={toggleModal} />
            </div>
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal}>
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h6 m-0 text-uppercase">authentication app</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                <Modal.Body>
                    <UserAccountAuth />
                </Modal.Body>
            </HeaderModal>
            {/*========== HeaderModal ==========*/}
        </>
    )
}

export default AccountAuth