import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function SliderItem (props) {
    const { photobanner, name, category, description } = props.item
    const { isActive } = props.values

    // map for category to create item category
    const categoryList = category.map((cate , index) => {
        return (
            <span key={index} className="font--size--small text-capitalize">
                <Link to={cate.path} className="anchors--reset">{cate.name}</Link>
                {index !== (category.length - 1) && ", "}
            </span>
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className={`slider__item ${isActive && "item--active"}`}>
            <Container className="h-100 pt-5 pt-lg-0">
                <Row className="align-content-start align-content-lg-center align-items-start align-items-lg-center text-center text-lg-left layout--space--30 h-100">
                    {/*========== item__data ==========*/}
                    <Col  xs={{span: 12, order: 3}} lg={{span: 6, order: 1}}>
                        <div className="item__data dark--mode">
                            {categoryList}
                            <h2 className="mb-4 text-capitalize">{name}</h2>
                            <p className="mb-4">{description}</p>
                            <Link role="button" to="/" className="anchors--reset btn__default btn--secondary">discover now</Link>
                        </div>
                    </Col>
                    {/*========== item__data ==========*/}
                    {/*========== photobanner ==========*/}
                    <Col xs={{span: 12, order: 2}} lg={6}>
                        <img src={photobanner} alt="slider" />
                    </Col>
                    {/*========== photobanner ==========*/}
                </Row>
            </Container>
        </div>
    )
}

SliderItem.propTypes = {
    values: PropTypes.object,
    item: PropTypes.object.isRequired
};

export default SliderItem