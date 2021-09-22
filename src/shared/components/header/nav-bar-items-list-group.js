import { useState } from "react"
import { Link } from "react-router-dom"
import { AngleDownIcon , AngleUpIcon } from "../elements/icons";
import PropTypes from 'prop-types';

function NavBarItemsListGroup (props) {
    const {route, content, classes, items} = props.item
    const [listbar, setListBar] = useState(false)

    // toggle listbar
    function toggleListBar() {
        setListBar(!listbar)
    }

    // map for items to create li group
    let itemsList = items.map((item , index) => {
        return (
            <li key={index}>
                <Link className={`anchors--reset ${item.classes || null}`} to={item.route} >
                    {item.content}
                </Link>
            </li>
        )
    })
    /**
     * {@inheritdoc}
     */
    return(
        <li className={`nav__drop ${classes} ${listbar ? 'listbar--open' : 'listbar--close'}`}>
            <div className="d-flex">
                <Link className="anchors--reset" to={route} >
                    {content}
                </Link>
                {
                    listbar ? <AngleUpIcon className={`icon`} onClick={toggleListBar} /> : <AngleDownIcon className={`icon`} onClick={toggleListBar} />
                }
            </div>
            {
                listbar && (
                    <ul className="list-unstyled m-0">
                        {itemsList}
                    </ul>
                )
            }
        </li>
    )
}

NavBarItemsListGroup.propTypes = {
    item: PropTypes.object.isRequired
};

export default NavBarItemsListGroup