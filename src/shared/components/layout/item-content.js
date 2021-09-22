import PropTypes from 'prop-types';

function ItemContent(props) {
    let {children,className} = props
    return (
        <div {...props} className={`item__content ${className}`}>
            {children}
        </div>
    )
}

ItemContent.proptypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}


export default ItemContent