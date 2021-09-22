import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function ListItem(props) {
    let {route, classes, content} = props.item
    /**
     * {@inheritdoc}
     */
    return (
        <li className={classes}>
            <Link to={route} className="anchors--reset">{content}</Link>
        </li>
    )
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default ListItem