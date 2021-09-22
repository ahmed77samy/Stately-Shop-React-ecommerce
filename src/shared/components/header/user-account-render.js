import Users from "modules/users/users"
import { useEffect, useState } from "react"
import UserAccountAuth from "./user-account-auth"
import UserAccountInformation from "./user-account-information"

function UserAccountRender () {
    const [isready , setIsReady] = useState(false)
    const [render , setRender] = useState("auth")

    /**
     * {@inheritdoc}
     */
    useEffect(() => {
        /**
         * check is user logged in or no
         * @returns {boolean}
         */
        const LoggedStatus = async() => {
            setIsReady(false)
            return await Users.isLoggedIn()
        }
        // handle ready and render state based on return from LoggedStatus
        LoggedStatus()
        .then(res => {
            if(res === true) {
                setIsReady(true)
                setRender("information")
            } else if(res === false) {
                setIsReady(true)
                setRender("auth")
            }
        })

        const ac = new AbortController()
        return () => ac.abort();
    },[])
    
    /**
     * {@inheritdoc}
     */       
    return isready === true && (render === "auth" ? <UserAccountAuth /> : <UserAccountInformation />)
}

export default UserAccountRender