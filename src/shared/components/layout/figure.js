import PropTypes from 'prop-types';

function Figure(props) {
    let {children} = props
    return (
        <figure {...props}>
            {children}
        </figure>
    )
}

Figure.propTypes = {
    children: PropTypes.node,
}

export default Figure