import { Container } from "react-bootstrap"
import { EmailIcon, HomeIcon } from "shared/components/elements/icons"
import Card from "shared/components/layout/card"
import "./styles/not-found-layout.scss"

function NotFoundLayout () {
    return (
        <section className="com--pd not__found__layout">
            <Container>
                <Card className="d-flex align-items-center justify-content-center">
                    <div className="sec__content">
                        <div>
                            <h2 className="h1">ERROR 404<br />NOT FOUND</h2>
                            <p className="m-0">You may have mis-typed the URL.</p>
                            <p className="m-0">Or the page has been removed.</p>
                            <p className="m-0">Actually, there is nothing to see here...</p>
                            <p className="m-0">Click on the links below to do something, Thanks!</p>
                            <div className="wrapper__btn">
                                <a href="/demo1" className="anchors--reset btn__default btn--primary text--white font--size--small">
                                    <HomeIcon className=" mr-2" />go to home
                                </a>
                                <a href="mailto:info@gmail.com" className="anchors--reset btn__default btn--primary text--white font--size--small">
                                    <EmailIcon className=" mr-2" />write us
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
            </Container>
        </section>
    )
}
export default NotFoundLayout