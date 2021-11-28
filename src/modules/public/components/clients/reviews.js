import ProductFiveStars from "modules/shop/components/products/product-fivestars"
import { Col, Row } from "react-bootstrap"
import {reviews} from "./items"

function Reviews () {
    return (
        <div className="reviews">
            <Row className="layout--space">
                <Col xs={12} lg={6}>
                    <div className="reviews__item">
                        <p className='comment'>
                            {reviews[0].comment}
                        </p>
                        <div className='inteface'>
                            <img src={reviews[0].photo} alt="reviews" />
                            <div>
                                <h6 className="text-uppercase m-0">{reviews[0].name}</h6>
                                <p className="font--size--small mb-1">{reviews[0].job}</p>
                                <ProductFiveStars stars={reviews[0].rating} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <div className="reviews__item">
                        <p className='comment'>
                            {reviews[1].comment}
                        </p>
                        <div className='inteface'>
                            <img src={reviews[1].photo} alt="reviews" />
                            <div>
                                <h6 className="text-uppercase m-0">{reviews[1].name}</h6>
                                <p className="font--size--small mb-1">{reviews[1].job}</p>
                                <ProductFiveStars stars={reviews[1].rating} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <div className="reviews__item">
                        <div className='inteface'>
                            <img src={reviews[2].photo} alt="reviews" />
                            <div>
                                <h6 className="text-uppercase m-0">{reviews[2].name}</h6>
                                <p className="font--size--small mb-1">{reviews[2].job}</p>
                                <ProductFiveStars stars={reviews[2].rating} />
                            </div>
                        </div>
                        <p className='comment top'>
                            {reviews[2].comment}
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Reviews