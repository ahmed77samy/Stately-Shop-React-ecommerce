import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { TimesIcon , UserIcon } from '../elements/icons';
import HeaderModal from '../modals/header-modal';
import UserAccountRender from './user-account-render';

function UserAccount () {
    const [modal , setModal] = useState(false)

    /**
     * toogle modal by setModal
     */
     const toggleModal = () => setModal(!modal);

    /**
     * {@inheritdoc}
     */
    return(
        <div className="user__account">
            <div className="wrapper__badge">
                <UserIcon className="icon" onClick={toggleModal} />
            </div>
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal} animation={false}>
                {/*========== Modal.Header ==========*/}
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h6 m-0 text-uppercase">authentication app</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                {/*========== Modal.Header ==========*/}
                {/*========== Modal.Body ==========*/}
                <Modal.Body>
                    <UserAccountRender />
                </Modal.Body>
                {/*========== Modal.Body ==========*/}
            </HeaderModal>
            {/*========== HeaderModal ==========*/}
        </div>
    )
}

export default UserAccount