import React from "react"
import { Tab } from "react-bootstrap"

function ContentItem (props) {
    const { eventKey, Component } = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <Tab.Pane eventKey={eventKey}>
            <Component />
        </Tab.Pane>
    )
}

export default ContentItem