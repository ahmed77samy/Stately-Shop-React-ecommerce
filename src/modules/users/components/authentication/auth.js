import Card from "shared/components/layout/card"
import SecHeader from "shared/components/layout/sec-header"
import FormLogin from "./form-login"
import FormRegister from "./form-register"
import { useState } from "react"
import "./styles/auth.scss"
import { Container } from "react-bootstrap"
import users from "modules/users/users"
import BorderLoading from "shared/components/elements/border-loading"

function Auth () {
    const [view , setView] = useState('login')

    /**
     * toogle view by setView to render the type form
     * @param {event} e 
     */
    const toggleView = (e) => {
        e.preventDefault()
        if(view === 'login') {
            return setView("register")
        }
        setView("login")
    }

    /**
     * {@inheritdoc}
     */
    return(
        <section className="com--pd form__auth">
            <Container>
                {
                    users.isLoggedIn() ? 
                    <div className="text-center"><BorderLoading /></div>
                    :
                    <Card className="py-5 px-3">
                        <SecHeader title="my account" description="Welcome to stately shop Community" className="header--center" />
                        <div className="sec__content">
                            {
                                view === 'login' ?
                                <FormLogin toggle={toggleView} /> :
                                <FormRegister toggle={toggleView} />
                            }
                        </div>
                    </Card>
                }
            </Container>
        </section>
    )
}

export default Auth