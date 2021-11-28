import { TimesIcon , HeartIcon } from '../elements/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderModal from '../modals/header-modal';
import { Modal } from 'react-bootstrap';
import BorderLoading from '../elements/border-loading';
import WishlistItem from './wishlist-item';

function UserWishlist (props) {
    const [modal , setModal] = useState(false)
    let Wishlist = props.user_wshl
    let limited = 5

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    // map for wishlist to create result item
    // check is last index to add show all link
    const resultList = Wishlist?.map((item , index) => {
        return index < limited && (
            <WishlistItem item={item} key={index} />
        )
    })
    
    /**
     * {@inheritdoc}
     */
    return(
        <div className="user__wishlist d-none d-lg-flex">
            <div className="wrapper__badge">
                <HeartIcon className="icon" onClick={toggleModal} />
                <span className="font--size--small badge__number bg--black text-white">
                    {
                        // check user_wshl to previews
                        Wishlist === undefined ? 0 :
                        Wishlist && Wishlist?.length
                    }
                </span>
            </div>
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal} animation={false}>
                {/*========== Modal.Header ==========*/}
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h4 m-0 text-uppercase">your wishlist</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                {/*========== Modal.Header ==========*/}
                {/*========== modal__fragment ==========*/}
                <div className="modal__fragment">
                    <Link to="/user/favourites" className="text-uppercase anchors--reset d-inline-flex align-items-center">
                        view all wishlist {Wishlist && Wishlist.length > 0 && `(${Wishlist.length})`}
                    </Link>
                </div>
                {/*========== modal__fragment ==========*/}
                {/*========== modal__fragment ==========*/}
                <Modal.Body>
                    <div className="body__result">
                        {
                            // check user_wshl to previews
                            Wishlist === null ? <div className="text-center my-3"><BorderLoading /></div> :
                            Wishlist === undefined ? <p className="text-danger">An unexpected error occurred. Please try again soon</p> :
                            Wishlist.length === 0 ? <p>No Products In Wishlist <Link to="/shop/banner-sidebar" className="anchors--reset text--primary--500">Descover Now.</Link> </p> :
                            Wishlist && resultList
                        }
                    </div>
                </Modal.Body>
            </HeaderModal>
            {/*========== HeaderModal ==========*/}
        </div>
    )
}

export default UserWishlist