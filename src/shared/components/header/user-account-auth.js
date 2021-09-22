import FormLogin from "modules/users/components/authentication/form-login"
import FormRegister from "modules/users/components/authentication/form-register"
import { useState } from "react"

function UserAccountAuth () {
    const [view , setView] = useState("login")
    
    /**
     * toogle view by setView to render the type form
     * @param {event} e 
     */
    const toggleView = (e) => {
        e.preventDefault()
        if(view === "login"){
            return setView("register")
        }
        setView("login")
    }

    /**
     * {@inheritdoc}
     */
    return(
        <div>
            {view === 'login' ? <FormLogin className="mx-0" toggle={toggleView} /> : <FormRegister className="mx-0" toggle={toggleView} />}
        </div>
    )
}

export default UserAccountAuth