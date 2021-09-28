import { TimesIcon , ChevronRightLongIcon , HeartIcon } from '../elements/icons';
import { Fragment, useState } from 'react';
import ResultItem from './result-item';
import { wishlist_items } from 'items';
import { Link } from 'react-router-dom';
import HeaderModal from '../modals/header-modal';
import { Modal } from 'react-bootstrap';

function UserWishlist () {
    const [modal , setModal] = useState(false)
    let limited = 9

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    // map for wishlist to create result item
    // check is last index to add show all link
    const resultList = wishlist_items.map((item , index) => {
        return index < limited && (
            <Fragment key={index}>
                <ResultItem item={item} />
                {
                    index === (limited - 1) && 
                    <Link to="/" className="show__all mx-auto mt-2 mb-4 text-uppercase anchors--reset d-flex align-items-center">
                        view all wishlist {wishlist_items.length > 0 && `(${wishlist_items.length})`} <ChevronRightLongIcon className="ml-1 icon" />
                    </Link>
                }
            </Fragment>
        )
    })
    
    /**
     * {@inheritdoc}
     */
    return(
        <div className="user__wishlist">
            <div className="wrapper__badge">
                <HeartIcon className="icon" onClick={toggleModal} />
                <span className="font--size--small badge__number bg--black text-white">{wishlist_items.length}</span>
            </div>
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal} animation={false}>
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h6 m-0 text-uppercase">your wishlist</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                <Modal.Body>
                    <div className="body__result">
                        {resultList}
                    </div>
                </Modal.Body>
            </HeaderModal>
            {/*========== HeaderModal ==========*/}
        </div>
    )
}

export default UserWishlist