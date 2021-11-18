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
        let isMounted = true
        /**
         * check is user logged in or no
         * @returns {boolean}
         */
        const LoggedStatus = async() => {
            if(isMounted) {
                setIsReady(false)
            }
            return await Users.isLoggedIn()
        }
        // handle ready and render state based on return from LoggedStatus
        LoggedStatus()
        .then(res => {
            if(isMounted) {
                if(res === true) {
                    setIsReady(true)
                    setRender("information")
                } else if(res === false) {
                    setIsReady(true)
                    setRender("auth")
                }
            }
        })

        return () => isMounted = false;
    },[])
    
    /**
     * {@inheritdoc}
     */       
    return isready === true && (render === "auth" ? <UserAccountAuth /> : <UserAccountInformation />)
}

export default UserAccountRender