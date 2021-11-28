import { Col, Row } from "react-bootstrap"
import Figure from "../layout/figure"
import ItemContent from "../layout/item-content"
import PropTypes from "prop-types"
import { TimesIcon } from "shared/components/elements/icons"
import ProductFiveStars from "modules/shop/components/products/product-fivestars"
import ProductSalary from "modules/shop/components/products/product-salary"
import ConfigService from "core/config-service"
import ProductViewForm from "modules/shop/components/product-single-layout/product-view-form"

function ProductModalItem(props) {
    const main_root = ConfigService.config.get("endpoints.url")
    const { mainImage , pro_name , sale , price , pro_des , pro_rate , newest } = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <section className="modal__item">
            <Row noGutters className="layout--space">
                <Col xs={12} lg={6}>
                    <Figure>
                        <TimesIcon onClick={props.toggleModal} className="icon icon__close d-block d-lg-none" />
                        <div className="wrapper__badge">
                            {newest && <span className="badge__raduis badge--left font--size--small text-uppercase bg--primary--400 text--white">new</span>}
                            {sale?.sale && <span className="badge__raduis badge--left font--size--small text-uppercase bg--secondary--400 text--white">sale</span>}
                        </div>
                        <img src={`${main_root}/${mainImage}`} alt="product" />
                    </Figure>
                </Col>
                <Col xs={12} lg={6}>
                    <TimesIcon onClick={props.toggleModal} className="icon icon__close d-none d-lg-block" />
                    <ItemContent>
                        <h4 className="h5 text-capitalize m-0">{pro_name}</h4>
                        <div className="d-flex align-self-stretch">
                            <ProductSalary sale={sale} salary={price} className="mr-3" />
                            <ProductFiveStars stars={pro_rate} reviews={12} />
                        </div>
                        <p>{pro_des}</p>
                        <ProductViewForm item={props.item} />
                    </ItemContent>
                </Col>
            </Row>
        </section>
    )
}

ProductModalItem.propTypes = {
    item : PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired,
}

export default ProductModalItem