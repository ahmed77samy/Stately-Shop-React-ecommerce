import ConfigService from "core/config-service"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function AsideProduct(props) {
    const main_root = ConfigService.config.get("endpoints.url")
    const {mainImage, pro_name, pro_des, id} = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <div className="aside__item">
            {/*========== group__info ==========*/}
            <div className="group__info">
                <figure className="anchors--effect effect--2">
                    <Link to={`/shop/product-single/${id}`} className="anchors--reset">
                        <img src={`${main_root}/${mainImage}`} alt="collection" />
                    </Link>
                </figure>
                <h6 className="m-0 text-capitalize">
                    <Link to={`/shop/product-single/${id}`} className="anchors--reset">
                        {pro_name}
                    </Link>
                    <br />
                    <p className="font--size--small description mb-0 mt-1">{pro_des}</p>
                </h6>
            </div>
            {/*========== group__info ==========*/}
        </div>
    )
}

AsideProduct.propTypes = {
    item: PropTypes.object.isRequired
}

export default AsideProduct