import { Link } from 'react-router-dom';
import Figure from '../layout/figure';
import ItemContent from '../layout/item-content';
import PropTypes from 'prop-types';
import ConfigService from 'core/config-service';
import { CartIcon, TrashIcon } from '../elements/icons';
import ProductModal from '../modals/product-modal';
import { useState } from 'react';

function WishlistItem (props) {
    const [modal , setModal] = useState(false)
    const main_root = ConfigService.config.get("endpoints.url")
    let {mainImage, pro_name, product_id, pro_des} = props.item

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    /**
     * set modal to true to handle action
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        toggleModal()
    }
    
    // preventDefault to links
    const preventDefault = e => e.preventDefault()

    /**
     * {@inheritdoc}
     */
    return (
        <div className="result__item">
            <Figure className="anchors--effect effect--2">
                <Link to="/" className="anchors--reset" onClick={handleClick}>
                    <img src={`${main_root}/${mainImage}`} alt="product-item" />
                </Link>
                <ProductModal item={props.item} show={modal} onHide={toggleModal}/>
            </Figure>
            <ItemContent>
                <h6><Link to={`/shop/product-single/${product_id}`} className="anchors--reset">{pro_name}</Link></h6>
                <p className="description">{pro_des}</p>
                {/*========== actions ==========*/}
                <div className="actions">
                    <Link to="/" className="anchors--reset badge__raduis checked" onClick={handleClick}>
                        <CartIcon className="icon" />
                    </Link>
                    <Link to="/" className="anchors--reset badge__raduis bg-danger" onClick={preventDefault}>
                        <TrashIcon className="icon" />
                    </Link>
                </div>
                {/*========== actions ==========*/}
            </ItemContent>
        </div>
    )
}

WishlistItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default WishlistItem