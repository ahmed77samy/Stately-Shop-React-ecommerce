import { Spinner } from "react-bootstrap"
import PropTypes from 'prop-types';

function BorderLoading (props) {
    return(
        <Spinner {...props} animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

BorderLoading.propTypes = {
    className: PropTypes.string,
}

export default BorderLoading
