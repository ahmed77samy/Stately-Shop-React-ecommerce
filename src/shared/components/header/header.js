import { useRef } from "react"
import { useEffect } from "react"
import Logo from "../elements/logo";
import Nav from "./nav"
import NavBar from "./nav-bar"
import User from "./user"
import "./styles/header.scss"
import { Col, Container, Row } from "react-bootstrap"

function Header () {
    let header = useRef(0)
    let deadline = 500

    /**
     * {@inheritdoc}
     */
    useEffect(() => {
        // this hooks make the header stuck when the scroll top to be more than deadline
        document.onscroll = function (e) {
            const bounding = document.documentElement.getBoundingClientRect()
            const scrollTop = Math.abs(bounding.top)
            if(scrollTop > deadline) {
                header.current?.classList.add("live__stuck")
                document.body.classList.add("header__live__stuck")
            }else {
                header.current?.classList.remove("live__stuck")
                document.body.classList.remove("header__live__stuck")
            }
        }
        return function cleanup() {
            document.body.classList.remove("header__live__stuck")
        };
    },[deadline])
    /**
     * {@inheritdoc}
     */
    return(
        <header ref={header}>
            <Container>
                <Row>
                    {/*========== header__logo ==========*/}
                    <Col xs={6} lg={2} className="d-flex align-items-center justify-content-start">
                        <Logo />
                    </Col>
                    {/*========== header__nav ==========*/}
                    <Col xs={8} className="d-none d-lg-flex align-items-center justify-content-center">
                        <Nav />
                    </Col>
                    {/*========== header__user ==========*/}
                    <Col xs={2} className="d-none d-lg-flex align-items-center justify-content-end">
                        <User />
                    </Col>
                    {/*========== header__bar ==========*/}
                    <Col xs={6} className="d-lg-none">
                        <NavBar />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header