import Layout from "shared/components/layout/layout"
import BannerSidebarLayout from "./banner-sidebar-layout/banner-sidebar-layout"

function BannerSidebar(props) {
    let key_search = props.props.match.params.key_search
    return(
        <Layout>
            <div id="shop__page">
                <BannerSidebarLayout key_search={key_search} />
            </div>
        </Layout>
    )
}

export default BannerSidebar