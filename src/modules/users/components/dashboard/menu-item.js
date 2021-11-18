import { Nav } from "react-bootstrap"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function MenuItem (props) {
    const { content, eventKey, Icon } = props.item
    return (
        <Nav.Item>
            <Nav.Link eventKey={eventKey} className="anchors--reset text-capitalize menu__item font--header" title={content} as={Link} to={`/user/${eventKey}`}>
                <span>
                    <Icon className="mr-3" /> {content}
                </span>
                <span>50</span>
            </Nav.Link>
        </Nav.Item>
    )
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default MenuItem