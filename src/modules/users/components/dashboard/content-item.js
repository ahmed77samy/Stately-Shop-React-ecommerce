import React from "react"
import { Tab } from "react-bootstrap"

function ContentItem (props) {
    const { eventKey, Component, data } = props.item

    // console.log(data);
    /**
     * {@inheritdoc}
     */
    return (
        <Tab.Pane eventKey={eventKey}>
            <Component data={data} />
        </Tab.Pane>
    )
}

export default ContentItem