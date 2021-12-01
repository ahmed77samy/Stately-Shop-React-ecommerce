import { useSelector } from "react-redux"
import { Col, Container, Row } from "react-bootstrap"
import UserInterface from "./user-interface"
import UserCart from "./user-cart"
import BorderLoading from "shared/components/elements/border-loading";
import { Link } from "react-router-dom";
import Card from "shared/components/layout/card";
import "./styles/dashboard-layouts.scss"

function CartLayout () {
    let user_data = useSelector(state => state.userReducer.user)
    let user_cart = useSelector(state => state.userReducer.user_cart)

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
                        // check user_cart to previews
                        user_cart === null ? <Card className="text-center"><BorderLoading /></Card> :
                        user_cart === undefined ? <Card className="text-center"><p className="text-danger m-0">An unexpected error occurred. Please try again soon</p></Card> :
                        user_cart.length === 0 ? <Card className="text-center"><p className="m-0">No Products In Cart <Link to="/shop/banner-sidebar" className="anchors--reset text--primary--500">Shop Now.</Link> </p></Card> :
                        user_cart && <UserCart user_cart={user_cart} />
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

export default CartLayout