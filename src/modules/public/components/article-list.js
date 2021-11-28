import Layout from "shared/components/layout/layout"
import ArticleListLayout from "./atricles/article-list-layout"

function ArticleList () {
    return (
        <Layout>
            <div id="Article__page">
                <ArticleListLayout />
            </div>
        </Layout>
    )
}

export default ArticleList