import { CartIcon , TimesIcon , ChevronRightLongIcon } from "../elements/icons";
import { useState } from 'react';
import { Link } from "react-router-dom";
import HeaderModal from "../modals/header-modal";
import { Modal } from "react-bootstrap";

function UserCart () {
    const [modal , setModal] = useState(false)

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);
    
    /**
     * {@inheritdoc}
     */
    return(
        <div className="user__cart">
            <div className="wrapper__badge">
                <CartIcon className="icon" onClick={toggleModal} />
                <span className="font--size--small badge__number bg--black text-white">1</span>
            </div>
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal} animation={false}>
                {/*========== Modal.Header ==========*/}
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h6 m-0 text-uppercase">shopping cart</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                {/*========== Modal.Header ==========*/}
                {/*========== modal__fragment ==========*/}
                <div className="modal__fragment">
                    <Link to="/" className="text-uppercase anchors--reset d-flex align-items-center">
                        view all cart <ChevronRightLongIcon className="icon" />
                    </Link>
                </div>
                {/*========== modal__fragment ==========*/}
                {/*========== Modal.Body ==========*/}
                <Modal.Body>
                    <div className="body__list">
                        <h1>cart</h1>
                    </div>
                </Modal.Body>
                {/*========== Modal.Body ==========*/}
            </HeaderModal>
            {/*========== HeaderModal ==========*/}

        </div>
    )
}

export default UserCart