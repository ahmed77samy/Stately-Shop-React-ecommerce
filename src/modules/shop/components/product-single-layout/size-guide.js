import Tabs from "shared/components/layout/tabs"
import { Col, Row, Tab } from "react-bootstrap"
import SizeGuideDresses from "./size-guide-dresses"
import SizeGuideTops from "./size-guide-tops"
import SizeGuideBottoms from "./size-guide-bottoms"
import SizeGuideDenim from "./size-guide-denim"
import SizeGuideSwimWear from "./size-guide-swim-wear"
import SizeGuideShoes from "./size-guide-shoes"

function SizeGuide () {
    return (
        <div className="size__guide">
            <Row className="layout--space">
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <div className="tab__header">
                        <h5>sizing & fit guide</h5>
                        <span>Use these charts to convert between standard size formats.</span>
                    </div>
                    <p>Please be aware that most of our clothing is Juniors' sizing, which runs smaller than regular US / European Women sizing. Refer to the measurements chart for each individual product to determine the best size for you. Product specific size chart and information can be found in product description or in product picture gallery.</p>
                    <p>Our team does it's best to include accurate size details and measurement of each item in the product descriptions. If you have questions regarding sizing or any other information on a specific item, please email us at hello@stately.com for specific details.</p>
                </Col>
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <div className="tab__header">
                        <h5>Find the best size</h5>
                        <span>You can easily find the right size</span>
                    </div>
                    <p>When comparing your measurements to those listed on the site, make sure to check if the fabric is stretchy or not. If it is, it can stretch an inch or more.</p>
                    <ul className="text--typo m-0 list-unstyled">
                        <li>
                            <p className="m-0">
                                <span className="text-capitalize text--black">bust&nbsp;:&nbsp;&nbsp;</span>
                                Wrap the measuring tape loosely around the fullest part of your bust to ensure a comfortable fit.
                            </p>
                        </li>
                        <li>
                            <p className="m-0">
                                <span className="text-capitalize text--black">Waist&nbsp;:&nbsp;&nbsp;</span>
                                Measure the narrowest part of your natural waist, holding the measuring tape loose enough to fit comfortably.
                            </p>
                        </li>
                        <li>
                            <p className="m-0">
                                <span className="text-capitalize text--black">Hips&nbsp;:&nbsp;&nbsp;</span>
                                Drape the measuring tape around the widest part of your hips, resting the tape comfortably against your body.
                            </p>
                        </li>
                        <li>
                            <p className="m-0">
                                <span className="text-capitalize text--black">Length&nbsp;:&nbsp;&nbsp;</span>
                                For tops and dresses, measure from the top of your shoulder to the hem. For strapless dresses, measure from the highest part of the neckline to the hem. For pants and skirts, measure from the top of the waist to the hem.
                            </p>
                        </li>
                        <li>
                            <p className="m-0">
                                <span className="text-capitalize text--black">Sleeve&nbsp;:&nbsp;&nbsp;</span>
                                With your arm outstretched, measure from the base of your neck to the end of the sleeve hem to determine where the sleeve length will fall on you.
                            </p>
                        </li>
                    </ul>
                </Col>
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <Tabs defaultActiveKey="dresses" id="size-guid-example">
                        <Tab eventKey="dresses" title="dresses" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                            <SizeGuideDresses />
                        </Tab>
                        <Tab eventKey="tops" title="tops" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                            <SizeGuideTops />
                        </Tab>
                        <Tab eventKey="bottoms" title="bottoms" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                            <SizeGuideBottoms />
                        </Tab>
                        <Tab eventKey="denim" title="denim" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                            <SizeGuideDenim />
                        </Tab>
                        <Tab eventKey="swimwear" title="swimwear" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                            <SizeGuideSwimWear />
                        </Tab>
                        <Tab eventKey="shoes" title="shoes" tabClassName="anchors--reset text--neutral--400 text-capitalize">
                            <SizeGuideShoes />
                        </Tab>
                    </Tabs>
                </Col>
                {/*========== Col ==========*/}
                {/*========== Col ==========*/}
                <Col xs={12}>
                    <h6 className="text-uppercase mb-3">Attention:</h6>
                    <p className="mb-5">This guide provides general sizing information only, and fit can vary depending on style and brand. For more specific sizing information on the product, please refer to product description.</p>
                    <h6 className="text-uppercase mb-3">note:</h6>
                    <ul className="text--typo note">
                        <li>All stately models are wearing size small in tops and dresses, and size 1, 3, or 5 in jeans depending on their body type.</li>
                        <li>Most stately jeans & dresses have some stretch, please refer to product description for fabric details.</li>
                        <li>Most stately bottoms have an inseam of 31-34” depending on the cut and style. Sizing may vary depending on cut and style.</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default SizeGuide