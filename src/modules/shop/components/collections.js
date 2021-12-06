import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import CollectionsLayout from "./collections/collections-layout"

function Collections () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / Collections")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="collections__page">
                <CollectionsLayout />
            </div>
        </Layout>
    )
}

export default Collections