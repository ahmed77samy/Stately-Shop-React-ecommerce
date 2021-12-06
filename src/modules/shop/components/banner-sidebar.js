import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import BannerSidebarLayout from "./banner-sidebar-layout/banner-sidebar-layout"

function BannerSidebar(props) {
    let key_search = props.props.match.params.key_search
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            key_search ? title(`Stately Shop / ${key_search}`) : title("Stately Shop / Products")
        }
        return () => isMounted = false;
    },[key_search])

    /**
     * {@inheritdoc}
     */
    return(
        <Layout>
            <div id="shop__page">
                <BannerSidebarLayout key_search={key_search} />
            </div>
        </Layout>
    )
}

export default BannerSidebar