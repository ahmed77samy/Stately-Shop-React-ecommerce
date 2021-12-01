import React from "react";

function InfoItem (props) {
    const { children, propsformik } = props

    return (
        <div className="info__item">
            {
                React.Children.map(children, child => {
                    return React.isValidElement(child) && React.cloneElement(child, { propsformik });
                })
            }
        </div>
    )
}

export default InfoItem