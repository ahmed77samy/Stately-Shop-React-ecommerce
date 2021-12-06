import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';

function ItemsList (props) {
    const { classes, route, content } = props.item
    /**
     * {@inheritdoc}
     */
    return(
        <li className={classes}>
            <NavLink className='anchors--reset' to={route} >
                {content}
            </NavLink>
        </li>
    )
}

ItemsList.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemsList