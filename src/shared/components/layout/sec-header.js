import PropTypes from 'prop-types';

function SecHeader (props) {

    let {title, description, className} = props

    return(
        <div className={`sec__header ${className}`}>
            <h2 className="sec__title">{title}</h2>
            {description && <span className="sec__description">{description}</span>}
        </div>
    )
}

SecHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    className: PropTypes.string,
}

export default SecHeader