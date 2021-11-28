import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Card from "shared/components/layout/card"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import photo1 from "assets/images/article/4.jpg"
import { article_items } from "./items"
import { QuoteIcon } from "shared/components/elements/icons"

function LayoutContentSingle () {
    
    const {photo, title, date, author: {name}} = article_items[1]

    return (
        <div className="layout__content__single">
            <Card className="h-auto">
                {/*========== article's img ==========*/}
                <Figure className="anchors--effect bg--neutral--100">
                    <Link to="/article-single" className="anchors--reset">
                        <img src={photo} alt="article" className="w-100" />
                    </Link>
                </Figure>
                {/*========== article's img ==========*/}
                <ItemContent>
                    {/*========== header ==========*/}
                    <div className="header">
                        <p className="text-capitalize m-0">by <span>{name}</span> on <span>{date}</span> </p>
                        <h4 className="text-capitalize h2">{title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                        <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                    </div>
                    {/*========== header ==========*/}
                    {/*========== details ==========*/}
                    <div className="details">
                        <Row className="layout--space align-items-center">
                            <Col xs={12} md={5} lg={12} xl={5}>
                                <Figure>
                                    <img src={photo1} alt="design" className="w-100" />
                                    <span className="d-block text-capitalize">Design by <Link to="/article-single" className="anchors--reset">{name}</Link></span>
                                </Figure>
                            </Col>
                            <Col xs={12} md={7} lg={12} xl={7}>
                                <ItemContent>
                                    <h5 className="h4">Quisque volutpat mattises.</h5>
                                    <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                                    <h5>More Details</h5>
                                    <ul className="text--typo">
                                        <li>Praesent id enim sit amet.</li>
                                        <li>Tdio vulputate eleifend in in tortor. ellus massa.</li>
                                        <li>Massa ristique sit amet condim vel</li>
                                        <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li>
                                        <li>Praesent id enim sit amet.</li>
                                        <li>Tdio vulputate eleifend in in tortor. ellus massa.</li>
                                    </ul>
                                </ItemContent>
                            </Col>
                        </Row>
                    </div>
                    {/*========== details ==========*/}
                    {/*========== quote ==========*/}
                    <div className="quote">
                        <blockquote>
                            <QuoteIcon className="icon" />
                            <h5 className="text--typo">Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.
                            Sed lectus. Praesent elementum hendrerit tortor.</h5>
                        </blockquote>
                        <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus.</p>
                    </div>
                    {/*========== quote ==========*/}
                    {/*========== author ==========*/}
                    <div className="author">
                        <Figure>
                            <img src={article_items[1].author.photo} alt="author" />
                        </Figure>
                        <ItemContent>
                            <span className="font--size--small">AUTHOR</span>
                            <h6>{name}</h6>
                            <p className="m-0">Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. eu vulputate magna eros eu erat.</p>
                        </ItemContent>
                    </div>
                    {/*========== author ==========*/}
                    {/*========== tags ==========*/}
                    <div className="tags">
                        <Link to="" className="anchors--reset text--typo">grid 2 col</Link>
                        <Link to="" className="anchors--reset text--typo">grid 3 col</Link>
                        <Link to="" className="anchors--reset text--typo">grid 4 col</Link>
                        <Link to="" className="anchors--reset text--typo">grid sidebar</Link>
                        <Link to="" className="anchors--reset text--typo">list</Link>
                    </div>
                    {/*========== tags ==========*/}

                    {/* Related Posts */}
                    {/* Related Posts */}

                </ItemContent>
            </Card>
        </div>
    )
}

export default LayoutContentSingle