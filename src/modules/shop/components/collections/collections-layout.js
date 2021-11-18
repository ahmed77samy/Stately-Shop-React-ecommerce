import { Container } from "react-bootstrap"
import { CartIcon, HomeIcon } from "shared/components/elements/icons"
import BreadCrumb from "shared/components/layout/bread-crumb"
import LayoutContent from "./layout-content"
import "./styles/collection.scss"

function CollectionsLayout () {
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
            content: "collections",
            route: "/shop/collections",
            props: {active: true}
        },
    ]

    /**
     * {@inheritdoc}
     */
    return(
        <section className="com--pd collections__layout">
            <Container>
                <BreadCrumb el={elBreadCrumb} />
                <LayoutContent />
            </Container>
        </section>
    )
}

export default CollectionsLayout