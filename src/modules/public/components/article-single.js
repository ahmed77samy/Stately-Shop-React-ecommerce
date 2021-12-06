import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import ArticleSingleLayout from "./atricles/article-single-layout"

function ArticleSingle () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / Blog single")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="Article__page">
                <ArticleSingleLayout />
            </div>
        </Layout>
    )
}

export default ArticleSingle