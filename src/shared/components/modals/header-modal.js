import { Modal } from "react-bootstrap"
import PropTypes from 'prop-types';
import "./styles/header-modal.scss"

function HeaderModal (props) {
    return(
        <Modal {...props} className={`header__modal ${props.className}`}>
            {props.children}
        </Modal>
    )
}

HeaderModal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    animation: PropTypes.bool,
}

export default HeaderModal