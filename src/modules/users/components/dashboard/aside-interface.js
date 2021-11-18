import ConfigService from "core/config-service";
import PropTypes from "prop-types"

function AsideInterface (props) {
    const { Fname, Lname, img } = props.user;
    const main_root = ConfigService.config.get("endpoints.url");
    /**
     * {@inheritdoc}
     */
    return (
        <div className="aside__interface text-center">
            <img src={`${main_root}/${img}`} alt="user" />
            <p className="m-0">welocome</p>
            <h2 className="h6 m-0">{Fname}&nbsp;{Lname}</h2>
        </div>
    )
}

AsideInterface.propTypes = {
    user: PropTypes.object.isRequired
}

export default AsideInterface