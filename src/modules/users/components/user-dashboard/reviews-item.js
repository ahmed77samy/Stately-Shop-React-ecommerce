import ConfigService from "core/config-service"
import ProductFiveStars from "modules/shop/components/products/product-fivestars"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"

function ReviewsItem (props) {
    const { rating, product, comment } = props.item
    const main_root = ConfigService.config.get("endpoints.url")
    let user_data = useSelector(state => state.userReducer.user.user)

    // prevent defaults to links
    const handleClick = (e) => {
        e.preventDefault()
    }

    /**
     * {@inheritdoc}
     */
    return (
        <div className="reviews__item">
            {/*========== figure ==========*/}
            <Figure className="anchors--effect">
                <Link to="/" className="anchors--reset" onClick={handleClick}>
                    <img src={product.photo} alt="product" className="w-100" />
                </Link>
            </Figure>
            {/*========== figure ==========*/}
            {/*========== item__content ==========*/}
            <ItemContent>
                <div>
                    <img src={`${main_root}/${user_data.img}`} alt="user" />
                    <div>
                        <ProductFiveStars stars={rating} />
                        <span className="font--size--small">3 days ago</span>
                    </div>
                </div>
                <p className="description">{comment}</p>
            </ItemContent>
            {/*========== item__content ==========*/}
        </div>
    )
}

export default ReviewsItem