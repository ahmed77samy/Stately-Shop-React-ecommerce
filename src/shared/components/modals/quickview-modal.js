import { Modal } from "react-bootstrap"
import PropTypes from 'prop-types';
// import "./styles/header-modal.scss"

function QuickViewModal (props) {
    return(
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered {...props} className={`quickview__modal ${props.className}`}>
            {props.children}
        </Modal>
    )
}

QuickViewModal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    animation: PropTypes.bool,
    size: PropTypes.oneOf(["lg","md","sm"]),
}

export default QuickViewModal