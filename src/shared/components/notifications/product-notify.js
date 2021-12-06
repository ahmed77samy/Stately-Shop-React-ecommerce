import ConfigService from "core/config-service"
import "./styles/product-notify.scss"

function ProductNotify (props) {
    const { pro_name, mainImage, pro_des} = props.item

    const main_root = ConfigService.config.get("endpoints.url")


    return (
        <div className="notify__product__item">
            <img src={`${main_root}/${mainImage}`} alt="product" />
            <div>
                <h4 className="h6">{pro_name}</h4>
                <p className="m-0">{pro_des}</p>
            </div>
        </div>
    )
}

export default ProductNotify