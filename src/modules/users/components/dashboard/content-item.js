import React from "react"
import { Tab } from "react-bootstrap"
import PropTypes from "prop-types"

function ContentItem (props) {
    const { eventKey, Component } = props.item
    /**
     * {@inheritdoc}
     */
    return (
        <Tab.Pane eventKey={eventKey}>
            <Component userData={props.user} />
        </Tab.Pane>
    )
}

ContentItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default ContentItem