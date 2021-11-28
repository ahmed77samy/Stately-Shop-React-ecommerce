import ConfigService from "core/config-service"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function AsideCollection(props) {
    const main_root = ConfigService.config.get("endpoints.url")
    const {cat_img, cat_name} = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <div className="aside__item">
            {/*========== group__info ==========*/}
            <div className="group__info">
                <figure className="anchors--effect effect--2">
                    <Link to="/shop/banner-sidebar" className="anchors--reset">
                        <img src={`${main_root}/${cat_img}`} alt="collection" />
                    </Link>
                </figure>
                <h6 className="m-0 text-capitalize">
                    <Link to="/shop/banner-sidebar" className="anchors--reset">
                        {cat_name}
                    </Link>
                    <br />
                    <span className="font--size--small">products</span>
                </h6>
            </div>
            {/*========== group__info ==========*/}
        </div>
    )
}

AsideCollection.propTypes = {
    item: PropTypes.object.isRequired
}

export default AsideCollection