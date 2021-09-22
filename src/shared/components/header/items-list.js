import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function ItemsList (props) {
    const { classes, route, content } = props.item
    /**
     * {@inheritdoc}
     */
    return(
        <li className={classes}>
            <Link className='anchors--reset' to={route} >
                {content}
            </Link>
        </li>
    )
}

ItemsList.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemsList