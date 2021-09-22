import PropTypes from 'prop-types';

function Card (props) {
    let {className, children} = props;
    return (
        <div className={`my__card ${className}`}>
            {children}
        </div>
    )
}

Card.proptypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Card