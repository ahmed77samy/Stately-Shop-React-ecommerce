import {Link} from "react-router-dom"
import Card from "shared/components/layout/card"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import PropTypes from "prop-types"

function CollectionItem(props) {
    const {photo, content, products} = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <div className="collection__item">
            <Card>
                {/*========== figure ==========*/}
                <Figure className="anchors--effect">
                    <Link className="anchors--reset" to="/">
                        <img src={photo} alt="collection" />
                    </Link>
                </Figure>
                {/*========== figure ==========*/}
                {/*========== item__content ==========*/}
                <ItemContent>
                    <div>
                        <h6 className="m-0 text-uppercase">{content}</h6>
                        <p className="m-0 font--size--small text-uppercase">{products} products</p>
                    </div>
                    <Link to="/" className="anchors--reset">
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