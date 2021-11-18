import { user_items } from "items"
import users from "modules/users/users"
import { useEffect } from "react"
import { Col, Container, Row, Tab } from "react-bootstrap"
import { useSelector } from "react-redux"
import AsideDashoard from "./aside-dashoard"
import ContentDashoard from "./content-dashboard"
import { DashBoardItems } from "./items"
import "./styles/dashboard-layout.scss"

function DashboardLayout (props) {
    let loggedIn = users.isLoggedIn();
    let token = useSelector(state => loggedIn && state.userReducer.user.access_token);
    let id = useSelector(state => loggedIn && state.userReducer.user.user.id);
    let userdata = useSelector(state => state.userReducer.user)
    let usercart = useSelector(state => state.userReducer.user_cart)
    let user_wishlist = useSelector(state => state.userReducer.user_wishlist)
    
    // fetch usercart from users
    useEffect(() => {
        let isMounted = true
        if (loggedIn && !usercart && isMounted) {
            users.userCart(token ,id)
        }
        return () => isMounted = false;
    },[loggedIn, id])// eslint-disable-line react-hooks/exhaustive-deps

    // fetch wishlist from users
    useEffect(() => {
        let isMounted = true
        if (loggedIn && !user_wishlist && isMounted) {
            users.userFavourit(token ,id)
        }
        return () => isMounted = false;
    },[loggedIn, id])// eslint-disable-line react-hooks/exhaustive-deps

    // add data to items
    DashBoardItems.forEach((item) => {
        switch (item.eventKey) {

            case "cart":
                return item.data = usercart

            case "favourites":
                return item.data = user_wishlist

            case "orders":
                return item.data = user_items[0].orders

            case "reviews":
                return item.data = user_items[0].reviews
            
            default:
                return false
        }
    })

    /**
     * {@inheritdoc}
     */
    return (
        <section className="com--pd dashboard__layout">
            <Tab.Container id="user-dashboard-layout" defaultActiveKey={props.eventKey}>
                <Container>
                    <Row className="layout--space">
                        <Col xs={12} lg={4}>
                            <AsideDashoard user={userdata?.user} />
                        </Col>
                        <Col xs={12} lg={8}>
                            <ContentDashoard />
                        </Col>
                    </Row>
                </Container>
            </Tab.Container>
        </section>
    )
}

export default DashboardLayout