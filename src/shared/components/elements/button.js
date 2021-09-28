import { Form } from "react-bootstrap"
import BorderLoading from "./border-loading"
import PropTypes from 'prop-types';

function MyButton (props) {
    const { value , waitrequest } = props

    /**
     * {@inheritdoc}
     */
    return (
        <Form.Group>
            <button {...props} disabled={waitrequest === "true"}>
                {
                    waitrequest === "true" ?
                    <BorderLoading className="border__loading__default loading--small" /> :
                    value
                }
            </button>
        </Form.Group>
    )
}

MyButton.propTypes = {
    value: PropTypes.node.isRequired,
    waitrequest: PropTypes.oneOf(['true', 'false']),
}

export default MyButton