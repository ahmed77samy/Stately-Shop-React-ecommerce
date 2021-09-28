import { Modal } from "react-bootstrap"
import QuickViewModal from "./quickview-modal"
import "./styles/product-modal.scss"
import ProductModalItem from "./product-modal-item"
import PropTypes from "prop-types"

function ProductModal(props) {
    const { item, onHide } = props

    /**
     * {@inheritdoc}
     */
    return (
        <QuickViewModal {...props} className={`product__modal ${props.className}`}>
            <Modal.Body>
                <ProductModalItem item={item} toggleModal={onHide} />
            </Modal.Body>
        </QuickViewModal>
    )
}

ProductModal.propTypes = {
    item: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
}

export default ProductModal