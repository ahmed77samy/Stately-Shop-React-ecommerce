import { useSelector } from "react-redux"
import { Col, Container, Row } from "react-bootstrap"
import UserInterface from "./user-interface"
import UserOrders from "./user-orders"
import BorderLoading from "shared/components/elements/border-loading";
import { Link } from "react-router-dom";
import Card from "shared/components/layout/card";
import { user_items } from "items";
import "./styles/dashboard-layouts.scss"

function OrderLayout () {
    let user_data = useSelector(state => state.userReducer.user)
    let user_orders = user_items[0].orders

    /**
     * Wrapper Items return react component
     * @returns {React.component}
     */
    const WrapperItems = () => {
        return (
            <Row noGutters className="layout--space--20">
                <Col xs={12}><UserInterface user_data={user_data} /></Col>
                <Col xs={12}>
                    {
                        // check user_orders to previews
                        user_orders === null ? <Card className="text-center"><BorderLoading /></Card> :
                        user_orders === undefined ? <Card className="text-center"><p className="text-danger m-0">An unexpected error occurred. Please try again soon</p></Card> :
                        user_orders.length === 0 ? <Card className="text-center"><p className="m-0">No Orders Is Founded! <Link to="/shop/banner-sidebar" className="anchors--reset text--primary--500">Shop Now.</Link> </p></Card> :
                        user_orders && <UserOrders user_orders={user_orders} />
                    }
                </Col>
            </Row>
        )
    }

    /**
     * {@inheritdoc}
     */
    return (
        <section className="com--pd dashboard__layouts">
            <Container>
                {
                    // check user_data to previews
                    user_data === null ? <div className="text-center"><BorderLoading /></div> :
                    user_data === undefined ? <h6 className="text-danger text-center m-0">No user data Found !</h6> :
                    user_data && <WrapperItems />
                }
            </Container>
        </section>
    )
}

export default OrderLayout