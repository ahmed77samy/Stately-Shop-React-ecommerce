import { Nav } from "react-bootstrap"
import PropTypes from "prop-types"

function AsideItem (props) {
    const { content, eventKey, Icon } = props.item
    return (
        <Nav.Item>
            <Nav.Link eventKey={eventKey} className="anchors--reset text-uppercase" title={content}>
                <span>
                    <Icon className="icon mr-4" />
                    <span>{content}</span>
                </span>
            </Nav.Link>
        </Nav.Item>
    )
}

AsideItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default AsideItem