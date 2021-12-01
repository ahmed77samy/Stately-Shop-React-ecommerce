import Layout from "shared/components/layout/layout"
import ProfileLayout from "./user-dashboard/profile-layout.js"

function User () {
    return (
        <Layout>
            <div id="user__page">
                <ProfileLayout />
            </div>
        </Layout>
    )
}

export default User