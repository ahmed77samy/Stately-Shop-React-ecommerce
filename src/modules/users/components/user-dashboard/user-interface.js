import Banner from "shared/components/layout/banner"
import Card from "shared/components/layout/card"
import photo1 from "assets/images/users/cover.jpg"
import PropTypes from "prop-types"
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import ConfigService from "core/config-service";
import { NavLink } from "react-router-dom";
import { BarsIcon, CameraIcon } from "shared/components/elements/icons";
import { useRef } from "react";

function UserInterface (props) {
    const { user: {Fname, Lname, img} } = props.user_data
    const main_root = ConfigService.config.get("endpoints.url")
    const navRef = useRef(0)

    // prevent default to links
    const handleClick = e => e.preventDefault()

    const handleToggle = () => {
        navRef.current.classList.toggle('active')
    }

    /**
     * {@inheritdoc}
     */
    return (
        <div className="user__interface">
            <Card className="pb-0">
                <Banner className="over--lay" bg={photo1} alt="user-banner" height="300" />
                <Row className="align-items-center">
                    {/*========== left wrapper ==========*/}
                    <Col xs={5}>
                        <div className="wrapper d-none d-md-block">
                            <ul className="list-unstyled m-0">
                                <li><NavLink exact to="/user" className="anchors--reset">profile</NavLink></li>
                                <li><NavLink exact to="/user/cart" className="anchors--reset">cart</NavLink></li>
                                <li><NavLink exact to="/user/favourites" className="anchors--reset">wishlist</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    {/*========== left wrapper ==========*/}
                    {/*========== profile wrapper ==========*/}
                    <Col xs={12} md={2}>
                        <div className="text-md-center profile wrapper">
                            <img src={`${main_root}/${img}`} alt={`user-${Fname}`} />
                            <DropdownButton id="dropdown-basic" title={<CameraIcon className="icon" />} variant="none" drop="right">
                                <Dropdown.Item as="a" href="/" onClick={handleClick} className="font--size--small text-uppercase">update profile photo</Dropdown.Item>
                                <Dropdown.Item as="a" href="/" onClick={handleClick} className="font--size--small text-uppercase">update header photo</Dropdown.Item>
                                <Dropdown.Item as="a" href="/" onClick={handleClick} className="font--size--small text-uppercase">show photo</Dropdown.Item>
                            </DropdownButton>
                            <div>
                                <h2 className="h5 m-0">{Fname + " " + Lname}</h2>
                                <span className="font--size--small">San Francisco, CA</span>
                            </div>
                        </div>
                    </Col>
                    {/*========== profile wrapper ==========*/}
                    {/*========== right wrapper ==========*/}
                    <Col xs={5}>
                        <div className="wrapper d-none d-md-block">
                            <ul className="list-unstyled m-0">
                                <li><NavLink exact to="/user/orders" className="anchors--reset">orders</NavLink></li>
                                <li><NavLink exact to="/user/reviews" className="anchors--reset">reviews</NavLink></li>
                                <li><NavLink exact to="/user/setting" className="anchors--reset">account setting</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    {/*========== right wrapper ==========*/}
                    {/*========== nav wrapper ==========*/}
                    <Col xs={12} className="d-md-none">
                        <div className="nav wrapper" ref={navRef}>
                            <button className="btn__default btn--primary" onClick={handleToggle}><BarsIcon /></button>
                            <ul className="list-unstyled m-0">
                                <li><NavLink exact to="/user" className="anchors--reset">profile</NavLink></li>
                                <li><NavLink exact to="/user/cart" className="anchors--reset">cart</NavLink></li>
                                <li><NavLink exact to="/user/favourites" className="anchors--reset">wishlist</NavLink></li>
                                <li><NavLink exact to="/user/orders" className="anchors--reset">orders</NavLink></li>
                                <li><NavLink exact to="/user/reviews" className="anchors--reset">reviews</NavLink></li>
                                <li><NavLink exact to="/user/setting" className="anchors--reset">account setting</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    {/*========== nav wrapper ==========*/}
                </Row>
            </Card>
        </div>
    )
}

UserInterface.propTypes = {
    user_data: PropTypes.object.isRequired
}

export default UserInterface