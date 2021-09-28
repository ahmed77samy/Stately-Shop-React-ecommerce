import { Link } from 'react-router-dom';
import Figure from '../layout/figure';
import ItemContent from '../layout/item-content';
import PropTypes from 'prop-types';
import ProductSalary from 'modules/shop/components/products/product-salary';

function ResultItem (props) {
    let {photo, name, sale, salary} = props.item
    return (
        <div className="result__item">
            <Figure className="anchors--effect effect--2">
                <Link to="/" className="anchors--reset">
                    <img src={photo} alt="product-item" />
                </Link>
            </Figure>
            <ItemContent>
                <Link to="/" className="anchors--reset">
                    <h6>{name}</h6>
                </Link>
                <ProductSalary className="font--size--small" sale={sale} salary={salary} />
            </ItemContent>
        </div>
    )
}

ResultItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default ResultItem