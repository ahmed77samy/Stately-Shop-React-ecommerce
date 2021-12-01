import { useSelector } from "react-redux"
import { Col, Container, Row } from "react-bootstrap"
import UserInterface from "./user-interface"
import UserProfile from "./user-profile"
import BorderLoading from "shared/components/elements/border-loading";
import "./styles/dashboard-layouts.scss"

function ProfileLayout () {
    let user_data = useSelector(state => state.userReducer.user)

    /**
     * Wrapper Items return react component
     * @returns {React.component}
     */
    const WrapperItems = () => {
        return (
            <Row noGutters className="layout--space--20">
                <Col xs={12}><UserInterface user_data={user_data} /></Col>
                <Col xs={12}><UserProfile /></Col>
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

export default ProfileLayout