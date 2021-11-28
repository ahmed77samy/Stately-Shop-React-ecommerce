import { Container } from "react-bootstrap"
import BreadCrumb from "shared/components/layout/bread-crumb"
import { HomeIcon } from "shared/components/elements/icons"
import LayoutContent from "./layout-content"
import "./styles/articles.scss"

function ArticleGridLayout () {
    // items BreadCrumb
    const elBreadCrumb = [
        {
            content: "home",
            icon: HomeIcon,
            route: "/demo1",
        },
        {
            content: "article grid",
            route: "/article-grid",
            props: {active: true}
        },
    ]

    /**
     * {@inheritdoc}
     */
    return (
        <section className="com--pd article__grid__layout">
            <Container>
                <BreadCrumb el={elBreadCrumb} />
                <LayoutContent />
            </Container>
        </section>
    )
}

export default ArticleGridLayout