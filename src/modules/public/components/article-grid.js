import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import ArticleGridLayout from "./atricles/article-grid-layout"

function ArticleGrid () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / Blog Grid")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="Article__page">
                <ArticleGridLayout />
            </div>
        </Layout>
    )
}

export default ArticleGrid