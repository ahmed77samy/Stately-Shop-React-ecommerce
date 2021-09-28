import { Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import Figure from "shared/components/layout/figure"
import { useState } from "react"
import QuickViewModal from "shared/components/modals/quickview-modal"
import { ClockIcon, PlayIcon, TimesIcon, TruckIcon } from "shared/components/elements/icons"
import ItemContent from "shared/components/layout/item-content"

function Description (props) {
    const { description } = props.item
    const [modal , setModal] = useState(false)

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    // map to description features to create feat items
    const featItem = description.long.features.items.map((item , index) => {
        return(
            <li key={index}>
                <span className="ml-2">{item}</span>
            </li>
        )
    })

    // map to description Specifications to create Spec items
    const specItem = Object.keys(description.long.Specifications).map((item, index) => {
        return (
            <div key={index}>
                <label>{item}:&nbsp;&nbsp; </label>
                <span>{description.long.Specifications[item]}</span>
            </div>
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="description">
            <Row className="layout--space">
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <p className="m-0">
                        {description.long.description}
                    </p>
                </Col>
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12} lg={description.video?.video ? 6 : 12}>
                    <Row className="layout--space">
                        {/**
                         * check if description features is exists
                         */}
                        {
                            description.long?.features && (
                                <Col xs={12} lg={description.video?.video ? 12 : 6}>
                                    <div className="features">
                                        <div className='tab__header'>
                                            <h5>features</h5>
                                        </div>
                                        <p>{description.long.features.content}</p>
                                        <ul className="m-0">
                                            {featItem}
                                        </ul>
                                    </div>
                                </Col>
                            )
                        }
                        {/**
                         * check if description Specifications is exists
                         */}
                        {
                            description.long?.Specifications && (
                                <Col xs={12} lg={description.video?.video ? 12 : 6}>
                                    <div className="specifications">
                                        <div className='tab__header'>
                                            <h5>Specifications</h5>
                                        </div>
                                        <div className="spec">
                                            {specItem}
                                        </div>
                                    </div>
                                </Col>
                            )
                        }
                        {/**
                         * check if description video is exists
                         * if false ==> return this because it find in video
                         */}
                        {
                            !description.video?.video && (
                                <Col xs={12}>
                                    <ItemContent>
                                        <div>
                                            <ClockIcon className="icon" />
                                            <div>
                                                <h6 className="text-capitalize">24 hours service</h6>
                                                <span>Undoubtedly all day service</span>
                                            </div>
                                        </div>
                                        <div>
                                            <TruckIcon className="icon" />
                                            <div>
                                                <h6 className="text-capitalize">free shipping</h6>
                                                <span>On orders over $50.00</span>
                                            </div>
                                        </div>
                                    </ItemContent>
                                </Col>
                            )
                        }
                    </Row>
                </Col>
                {/*========== Col ==========*/}
                {/**
                 * check if description video is exists
                 */}
                <>
                    {
                        description.video?.video && 
                        (
                            <Col xs={12} lg={6}>
                                <div className='tab__header'>
                                    <h5>video description</h5>
                                </div>
                                {/*========== Figure ==========*/}
                                <Figure className="anchors--effect effect--2 mb-4" role="button">
                                    <div className="play__video">
                                        <PlayIcon className="icon" />
                                    </div>
                                    <img src={description.video.poster} alt="product-video" onClick={toggleModal} />
                                </Figure>
                                {/*========== Figure ==========*/}
                                {/*========== ItemContent ==========*/}
                                <ItemContent>
                                    <div>
                                        <ClockIcon className="icon" />
                                        <div>
                                            <h6 className="text-capitalize">24 hours service</h6>
                                            <span>Undoubtedly all day service</span>
                                        </div>
                                    </div>
                                    <div>
                                        <TruckIcon className="icon" />
                                        <div>
                                            <h6 className="text-capitalize">free shipping</h6>
                                            <span>On orders over $50.00</span>
                                        </div>
                                    </div>
                                </ItemContent>
                                {/*========== ItemContent ==========*/}
                                {/*========== QuickViewModal ==========*/}
                                <QuickViewModal show={modal} onHide={toggleModal}>
                                    <TimesIcon className="icon__close icon" onClick={toggleModal} />
                                    <video src={description.video.video} controls className="w-100" />
                                </QuickViewModal>
                                {/*========== QuickViewModal ==========*/}
                            </Col>
                        )
                    }
                </>
            </Row>
        </div>
    )
}

Description.propTypes = {
    item: PropTypes.object.isRequired
}

export default Description