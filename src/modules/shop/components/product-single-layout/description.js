import { Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import Figure from "shared/components/layout/figure"
import { useState } from "react"
import QuickViewModal from "shared/components/modals/quickview-modal"
import { ClockIcon, PlayIcon, TimesIcon, TruckIcon } from "shared/components/elements/icons"
import video from "assets/video/video1.mp4"
import postervideo from "assets/video/poster-video-1.jpg"
import ItemContent from "shared/components/layout/item-content"

// static content
const features = {
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
    items: [
        'Praesent id enim sit amet.Tdio vulputate',
        'Eleifend in in tortor. ellus massa.Dristique sitii',
        'Massa ristique sit amet condim vel',
        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
    ]
}
const Specifications = {
    material: "Praesent id enim sit amet.Tdio",
    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
    warranty: "2 year warranty",
    manufacturer: "Praesent id enim",
}
// static content

function Description (props) {
    const [modal , setModal] = useState(false)

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    // map to description features to create feat items
    const featItem = features.items.map((item , index) => {
        return(
            <li key={index}>
                <span className="ml-2">{item}</span>
            </li>
        )
    })

    // map to description Specifications to create Spec items
    const specItem = Object.keys(Specifications).map((item, index) => {
        return (
            <div key={index}>
                <label>{item}:&nbsp;&nbsp; </label>
                <p className="m-0">{Specifications[item]}</p>
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
                    <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12} lg={video ? 6 : 12}>
                    <Row className="layout--space">
                        {/**
                         * check if description features is exists
                         */}
                        {
                            features && (
                                <Col xs={12} lg={video ? 12 : 6}>
                                    <div className="features">
                                        <div className='tab__header'>
                                            <h5>features</h5>
                                        </div>
                                        <p>{features.content}</p>
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
                            Specifications && (
                                <Col xs={12} lg={video ? 12 : 6}>
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
                            !video && (
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
                        video && 
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
                                    <img src={postervideo} alt="product-video" onClick={toggleModal} />
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
                                    <TimesIcon className="icon__close icon fly" onClick={toggleModal} />
                                    <video src={video} controls className="w-100" />
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