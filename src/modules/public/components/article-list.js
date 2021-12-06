import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import ArticleListLayout from "./atricles/article-list-layout"

function ArticleList () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / Blog List")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="Article__page">
                <ArticleListLayout />
            </div>
        </Layout>
    )
}

export default ArticleList