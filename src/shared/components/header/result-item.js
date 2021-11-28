import { Link } from 'react-router-dom';
import Figure from '../layout/figure';
import ItemContent from '../layout/item-content';
import PropTypes from 'prop-types';
import ProductSalary from 'modules/shop/components/products/product-salary';
import ConfigService from 'core/config-service';
import ProductFiveStars from 'modules/shop/components/products/product-fivestars';
import ProductModal from '../modals/product-modal';
import { useState } from 'react';

function ResultItem (props) {
    const [modal , setModal] = useState(false)
    const main_root = ConfigService.config.get("endpoints.url")
    let {mainImage, pro_name, price, id, pro_rate, pro_des} = props.item


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
                <ProductFiveStars stars={pro_rate} className="mb-1" />
                <h6 className="mb-1"><Link to={`/shop/product-single/${id}`} className="anchors--reset">{pro_name}</Link></h6>
                <ProductSalary  salary={price} />
                <p className="description">{pro_des}</p>
            </ItemContent>
        </div>
    )
}

ResultItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default ResultItem