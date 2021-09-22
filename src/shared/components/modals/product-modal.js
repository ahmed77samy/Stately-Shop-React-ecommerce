import { Modal } from "react-bootstrap"
import QuickViewModal from "./quickview-modal"
import "./styles/product-modal.scss"
import ProductModalItem from "./product-modal-item"
import PropTypes from "prop-types"

function ProductModal(props) {
    const { item, toggleModal, modal } = props

    /**
     * {@inheritdoc}
     */
    return (
        <QuickViewModal className="product__modal" show={modal} onHide={toggleModal}>
            <Modal.Body>
                <ProductModalItem item={item} toggleModal={toggleModal} />
            </Modal.Body>
        </QuickViewModal>
    )
}

ProductModal.propTypes = {
    item: PropTypes.object.isRequired,
    modal: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
}

export default ProductModal