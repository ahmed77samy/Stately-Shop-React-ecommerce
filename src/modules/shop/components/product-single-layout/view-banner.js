import ConfigService from "core/config-service"
import Figure from "shared/components/layout/figure"
import PropTypes from "prop-types"

function ViewBanner (props) {
    const main_root = ConfigService.config.get("endpoints.url")
    const {mainImage} = props.item
    return(
        <Figure>
            <img src={`${main_root}/${mainImage}`} alt="product" />
        </Figure>
    )
}

ViewBanner.propTypes = {
    item: PropTypes.object.isRequired
}

export default ViewBanner