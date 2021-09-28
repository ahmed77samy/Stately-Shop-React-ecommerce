import PropTypes from 'prop-types';

function ItemContent(props) {
    let {children,className} = props
    return (
        <div {...props} className={`item__content ${className}`}>
            {children}
        </div>
    )
}

ItemContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
}


export default ItemContent