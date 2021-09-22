import PropTypes from 'prop-types';

function FooterItem (props) {
    const {title , children} = props

    /**
     * {@inheritdoc}
     */
    return(
        <div className="footer__item">
            <div className="item__header">
                <h4 className='h6 m-0 text-uppercase'>{title}</h4>
            </div>
            {children}
        </div>
    )
}

FooterItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default FooterItem