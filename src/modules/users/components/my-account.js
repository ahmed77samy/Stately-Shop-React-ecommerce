import Layout from "shared/components/layout/layout"
import Auth from "./authentication/auth"

function MyAccount () {
    return (
        <Layout>
            <div id="my__account__page">
                <Auth />
            </div>
        </Layout>
    )
}

export default MyAccount