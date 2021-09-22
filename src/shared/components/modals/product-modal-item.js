import { Col, Row } from "react-bootstrap"
import Figure from "../layout/figure"
import ItemContent from "../layout/item-content"
import FiveStars from "../elements/fivestars"
import Salary from "../elements/salary"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { TimesIcon } from "shared/components/elements/icons"

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
                            <Salary sale={sale} salary={salary} className="mr-3" />
                            <FiveStars stars={rating} />
                        </div>
                        <p>{description}</p>
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