import { Container } from "react-bootstrap"
import { CartIcon, HomeIcon } from "shared/components/elements/icons"
import BreadCrumb from "shared/components/layout/bread-crumb"
import LayoutContent from "./layout-content"
import "./styles/banner-aside-layout.scss"

function BannerSidebarLayout (props) {
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

    if(props.key_search) {
        elBreadCrumb.push({
            content: props.key_search,
            route: `/shop/banner-sidebar/${props.key_search}`,
            props: {active: true}
        })
    }

    /**
     * {@inheritdoc}
     */
    return(
        <section className="com--pd banner__sidebar__layout">
            <Container>
                <BreadCrumb el={elBreadCrumb} />
                <LayoutContent key_search={props.key_search} />
            </Container>
        </section>
    )
}

export default BannerSidebarLayout