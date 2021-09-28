import { Col, Row } from "react-bootstrap"
import Figure from "../layout/figure"
import ItemContent from "../layout/item-content"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { TimesIcon } from "shared/components/elements/icons"
import ProductFiveStars from "modules/shop/components/products/product-fivestars"
import ProductSalary from "modules/shop/components/products/product-salary"

function ProductModalItem(props) {
    const { photo , name , sale , salary , description , rating , newest } = props.item

    /**
     * {@inheritdoc}
     */
    return (
        <div className="modal__item">
            <Row noGutters>
                <Col xs={6}>
                    <Figure>
                        <div className="wrapper__badge">
                            {newest && <span className="badge__raduis badge--left font--size--small text-uppercase bg--primary--400 text--white">new</span>}
                            {sale?.sale && <span className="badge__raduis badge--left font--size--small text-uppercase bg--secondary--400 text--white">sale</span>}
                        </div>
                        <img src={photo} alt="product" />
                    </Figure>
                </Col>
                <Col xs={6}>
                    <TimesIcon onClick={props.toggleModal} className="icon icon__close" />
                    <ItemContent>
                        <h4 className="h5 text-capitalize m-0">
                            <Link to="/" className="anchors--reset">
                                {name}
                            </Link>
                        </h4>
                        <div className="d-flex align-self-stretch">
                            <ProductSalary sale={sale} salary={salary} className="mr-3" />
                            <ProductFiveStars stars={rating} />
                        </div>
                        <p>{description.short}</p>
                    </ItemContent>
                </Col>
            </Row>
        </div>
    )
}

ProductModalItem.propTypes = {
    item : PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired,
}

export default ProductModalItem