import { CartIcon , TimesIcon } from "../elements/icons";
import { useState } from 'react';
import photo1 from "assets/images/product/options.png"
import { Link } from "react-router-dom";
import HeaderModal from "../modals/header-modal";
import { Modal } from "react-bootstrap";
import CartItem from "./cart-item";
import BorderLoading from "../elements/border-loading";
import MyButton from "../elements/button";
import ProductSalary from "modules/shop/components/products/product-salary";

function UserCart (props) {
    const [modal , setModal] = useState(false)
    let Cart = props.user_cart
    let limited = 5

    /**
     * sort array for the given value
     * @param {array} array 
     * @returns {array}
     */
    const sorting = (array) => {
        const sortValues = (arr, key, fr, lr) => {
            return arr.sort((a , b) => {
                if(a[key] < b[key]) return fr
                if(a[key] > b[key]) return lr
                return 0
            })
        }
        sortValues(array, "id", 1, -1)
        return array
    }

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    // map for cart to create result item
    // check is last index to add show all link
    const resultList = Cart && sorting(Cart).map((item , index) => {
        return index < limited && (
            <CartItem item={item} key={index} />
        )
    })

    /**
     * {@inheritdoc}
     */
    return(
        <div className="user__cart d-none d-lg-flex">
            <div className="wrapper__badge">
                <CartIcon className="icon" onClick={toggleModal} />
                <span className="font--size--small badge__number bg--black text-white">
                    {
                        // check user_wshl to previews
                        Cart === undefined ? 0 :
                        Cart && Cart?.length
                    }
                </span>
            </div>
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal} animation={false}>
                {/*========== Modal.Header ==========*/}
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h4 m-0 text-uppercase">shopping cart</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                {/*========== Modal.Header ==========*/}
                {/*========== modal__fragment ==========*/}
                <div className="modal__fragment">
                    <Link to="/user/cart" className="text-uppercase anchors--reset d-inline-flex align-items-center">
                        view all cart {Cart && Cart.length > 0 && `(${Cart.length})`}
                    </Link>
                </div>
                {/*========== modal__fragment ==========*/}
                {/*========== Modal.Body ==========*/}
                <Modal.Body>
                    <div className="body__result">
                        {
                            // check user_wshl to previews
                            Cart === null ? <div className="text-center my-3"><BorderLoading /></div> :
                            Cart === undefined ? <p className="text-danger">An unexpected error occurred. Please try again soon</p> :
                            Cart.length === 0 ? <p>No Products In Cart <Link to="/shop/banner-sidebar" className="anchors--reset text--primary--500">Shop Now.</Link> </p> :
                            Cart && resultList
                        }
                    </div>
                </Modal.Body>
                {/*========== Modal.Body ==========*/}
                {/*========== modal__footer ==========*/}
                {
                    // check user_wshl to previews
                    Cart === null ? <div className="text-center my-3"><BorderLoading /></div> :
                    Cart === undefined ? <p className="text-danger">An unexpected error occurred. Please try again soon</p> :
                    Cart.length === 0 ? <></> :
                    Cart && (
                        <div className="modal__footer">
                            <h4 className="text-uppercase h5 d-flex flex-wrap justify-content-between">
                                subtotal
                                <ProductSalary className="ml-2" salary={Cart?.reduce((acc, item) => (acc) + (item.price * item.quantity) ,0)} />
                            </h4>
                                <hr />
                            <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <img src={photo1} alt="sponser" className="my-3 img-fluid"  />
                            <MyButton value="check out" className="w-100 btn__default btn--primary btn--borxder" />
                        </div>
                    )
                }
                {/*========== modal__footer ==========*/}
            </HeaderModal>
            {/*========== HeaderModal ==========*/}

        </div>
    )
}

export default UserCart