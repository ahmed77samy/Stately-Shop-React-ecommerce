import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function AsideAuthor(props) {
    let {item} = props
    return (
        <div className="aside__item">
            {/*========== group__info ==========*/}
            <div className="group__info">
                <figure className="anchors--effect effect--2">
                    <Link to="/shop/banner-sidebar" className="anchors--reset">
                        <img src={item.photo} alt="product"/>
                    </Link>
                </figure>
                <h6 className="m-0 text-capitalize">
                    <Link to="/shop/banner-sidebar" className="anchors--reset">
                        {item.name}
                    </Link>
                    <br />
                    <span className="font--size--small">{item.job}</span>
                </h6>
            </div>
            {/*========== group__info ==========*/}
        </div>
    )
}

AsideAuthor.propTypes = {
    item: PropTypes.object.isRequired
}

export default AsideAuthor