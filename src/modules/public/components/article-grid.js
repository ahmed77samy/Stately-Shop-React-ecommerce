import Layout from "shared/components/layout/layout"
import ArticleGridLayout from "./atricles/article-grid-layout"

function ArticleGrid () {
    return (
        <Layout>
            <div id="Article__page">
                <ArticleGridLayout />
            </div>
        </Layout>
    )
}

export default ArticleGrid