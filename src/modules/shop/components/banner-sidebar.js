import BreadCrumb from "shared/components/layout/bread-crumb"
import Layout from "shared/components/layout/layout"
import BannerSidebarLayout from "./banner-sidebar-layout/banner-sidebar-layout"
import { CartIcon, HomeIcon } from "shared/components/elements/icons"

function BannerSidebar() {
    
    // items BreadCrumb
    const elBreadCrumb = [
        {
            content: "home",
            icon: HomeIcon,
            route: "/demo1",
        },
        {
            content: "shop",
            icon: CartIcon,
            route: "/shop",
        },
        {
            content: "banner sidebar",
            route: "/shop/banner-sidebar",
            props: {active: true}
        },
    ]

    /**
     * {@inheritdoc}
     */
    return(
        <Layout>
            <div id="shop__page">
                <BreadCrumb el={elBreadCrumb} />
                <BannerSidebarLayout />
            </div>
        </Layout>
    )
}

export default BannerSidebar