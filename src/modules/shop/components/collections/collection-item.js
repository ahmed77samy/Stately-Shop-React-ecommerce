import {Link} from "react-router-dom"
import Card from "shared/components/layout/card"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import PropTypes from "prop-types"
import ConfigService from "core/config-service"

function CollectionItem(props) {
    const main_root = ConfigService.config.get("endpoints.url")
    const {cat_img, cat_name} = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <div className="collection__item">
            <Card>
                {/*========== figure ==========*/}
                <Figure className="anchors--effect">
                    <Link className="anchors--reset" to="/shop/banner-sidebar">
                        <img src={`${main_root}/${cat_img}`} alt="collection" />
                    </Link>
                </Figure>
                {/*========== figure ==========*/}
                {/*========== item__content ==========*/}
                <ItemContent>
                    <div>
                        <h6 className="m-0 text-uppercase">{cat_name}</h6>
                        <p className="m-0 font--size--small text-uppercase">82 products</p>
                    </div>
                    <Link to="/shop/banner-sidebar" className="anchors--reset">
                        <span className="text-uppercase font--size--small">view all</span>
                    </Link>
                </ItemContent>
                {/*========== item__content ==========*/}
            </Card>
        </div>
    )
}

CollectionItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default CollectionItem