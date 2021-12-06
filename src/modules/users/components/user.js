import { title } from "core/meta-data.js"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import ProfileLayout from "./user-dashboard/profile-layout.js"

function User () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / My Profile")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="user__page">
                <ProfileLayout />
            </div>
        </Layout>
    )
}

export default User