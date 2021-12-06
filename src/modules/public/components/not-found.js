import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import NotFoundLayout from "./not-found/not-found-layout"

function NotFound () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / Not Found")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="not__found__page">
                <NotFoundLayout />
            </div>
        </Layout>
    )
}

export default NotFound