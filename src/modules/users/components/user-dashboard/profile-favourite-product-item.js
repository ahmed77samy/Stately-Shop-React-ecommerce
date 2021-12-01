import { HeartIcon } from "shared/components/elements/icons"
import PropTypes from "prop-types"
import ConfigService from "core/config-service"
import { Link } from "react-router-dom"

function ProfileFavouriteProductItem (props) {
    const {pro_name , mainImage , pro_des, product_id} = props.item
    const main_root = ConfigService.config.get("endpoints.url")
    return (
        <li className="aside__item">
            <div className="list__item">
                <img src={`${main_root}/${mainImage}`} alt="product" />
                <div className="d-flex justify-content-between w-100 align-items-center">
                    <div>
                        <h6 className="font--size--medium text--neutral--700 text-capitalize" role="button">
                            <Link to={`/shop/product-single/${product_id}`} className="anchors--reset">{pro_name}</Link>
                        </h6>
                        <span className="font--size--small">{pro_des}</span>
                    </div>
                    <span className="font--size--small text--primary--500"><HeartIcon className="icon" /></span>
                </div>
            </div>
        </li>
    )
}

ProfileFavouriteProductItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProfileFavouriteProductItem