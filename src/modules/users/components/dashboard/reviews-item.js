import ProductFiveStars from "modules/shop/components/products/product-fivestars"
import { Link } from "react-router-dom"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"

function ReviewsItem (props) {
    const { rating, product, comment } = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <div className="reviews__item">
            <div className="product">
                {/*========== Figure ==========*/}
                <Figure className="anchors--effect">
                    <Link to="/">
                        <img src={product.photo} alt="product" />
                    </Link>
                </Figure>
                {/*========== Figure ==========*/}
                {/*========== ItemContent ==========*/}
                <ItemContent>
                    <div>
                        <ProductFiveStars stars={rating} />
                        <span className="font--size--small">3 days ago</span>
                    </div>
                    <h4 className="h6 m-0 text-capitalize">
                        <Link to="/" className="anchors--reset">{product.name}</Link>
                    </h4>
                </ItemContent>
                {/*========== ItemContent ==========*/}
            </div>
            <p>{comment}</p>
        </div>
    )
}

export default ReviewsItem