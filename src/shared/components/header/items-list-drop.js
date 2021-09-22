import { NavLink } from "react-router-dom"
import { AngleDownIcon } from "../elements/icons";
import PropTypes from 'prop-types';

function ItemsListGroup (props) {
    const {route, content, classes, items} = props.item

    // map for items to create li drop
    let itemsList = items.map((item , index) => {
        return (
            <li key={index}>
                <NavLink exact className={`anchors--reset ${item.classes || null}`} to={item.route} >
                    {item.content}
                </NavLink>
            </li>
        )
    })
    /**
     * {@inheritdoc}
     */
    return(
        <li className={`nav__drop ${classes}`}>
            <NavLink className='anchors--reset' to={route} >
                {content}<AngleDownIcon className='icon' />
            </NavLink>
            <ul className="list-unstyled m-0">
                {itemsList}
            </ul>
        </li>
    )
}

ItemsListGroup.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemsListGroup