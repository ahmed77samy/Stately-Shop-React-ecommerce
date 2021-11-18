import { Link } from 'react-router-dom';
import Figure from '../layout/figure';
import ItemContent from '../layout/item-content';
import PropTypes from 'prop-types';
import ProductSalary from 'modules/shop/components/products/product-salary';
import ConfigService from 'core/config-service';

function ResultItem (props) {
    const main_root = ConfigService.config.get("endpoints.url")
    let {mainImage, pro_name, price} = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <div className="result__item">
            <Figure className="anchors--effect effect--2">
                <Link to="/" className="anchors--reset">
                    <img src={`${main_root}/${mainImage}`} alt="product-item" />
                </Link>
            </Figure>
            <ItemContent>
                <Link to="/" className="anchors--reset">
                    <h6>{pro_name}</h6>
                </Link>
                <ProductSalary className="font--size--small" salary={price} />
            </ItemContent>
        </div>
    )
}

ResultItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default ResultItem