import React from 'react';
import NotificationSystem from 'react-notification-system';

const notifyBag = React.createRef();

/**
 * @returns {React.Component}
 */
function NotifySystem() {
    return <NotificationSystem ref={notifyBag}  />
}

/**
 * set and reset the style item
 * add notify cart
 * @param {object} props 
 */
export const addNotify = (props) => {
    // Override the notification item's style
    const NotificationItem = {
        DefaultStyle: {
            border: 'none',
            boxShadow: "var(--shadow-x)",
            paddingTop: "0",
            paddingBottom: "0",
        },
        info: {
            background: 'rgba(var(--c-white) , 1)',
            color: 'rgba(var(--c-black) , 1)'
        }
    }
    notifyBag.current.props.style.NotificationItem = NotificationItem
    setTimeout(() => notifyBag.current.props.style.NotificationItem = {});
    notifyBag.current.addNotification({...props})
}


export default NotifySystem