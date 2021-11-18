import { TimesIcon , ChevronRightLongIcon , HeartIcon } from '../elements/icons';
import { Fragment, useState } from 'react';
import ResultItem from './result-item';
import { Link } from 'react-router-dom';
import HeaderModal from '../modals/header-modal';
import { Modal } from 'react-bootstrap';
import BorderLoading from '../elements/border-loading';

function UserWishlist (props) {
    const [modal , setModal] = useState(false)
    // const {user_wshl} = props
    let limited = 9

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    // map for wishlist to create result item
    // check is last index to add show all link
    const resultList = props.user_wshl?.map((item , index) => {
        return index < limited && (
            <Fragment key={index}>
                <ResultItem item={item} />
                {
                    index === (limited - 1) && 
                    <Link to="/" className="show__all mx-auto mt-2 mb-4 text-uppercase anchors--reset d-flex align-items-center">
                        view all wishlist {props.user_wshl.length > 0 && `(${props.user_wshl.length})`} <ChevronRightLongIcon className="ml-1 icon" />
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
                <span className="font--size--small badge__number bg--black text-white">
                    {
                        // check user_wshl to previews
                        props.user_wshl === undefined ? 0 :
                        props.user_wshl && props.user_wshl?.length
                    }
                </span>
            </div>
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal} animation={false}>
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h6 m-0 text-uppercase">your wishlist</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                <Modal.Body>
                    <div className="body__result">
                        {
                            // check user_wshl to previews
                            props.user_wshl === null ? <div className="text-center my-3"><BorderLoading /></div> :
                            props.user_wshl === undefined ? <p className="text-danger">An unexpected error occurred. Please try again soon</p> :
                            props.user_wshl && resultList
                        }
                    </div>
                </Modal.Body>
            </HeaderModal>
            {/*========== HeaderModal ==========*/}
        </div>
    )
}

export default UserWishlist