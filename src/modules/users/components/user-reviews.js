import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import ReviewsLayout from "./user-dashboard/reviews-layout"

function UserReviews () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / My Reviews")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="user__reviews__page">
                <ReviewsLayout />
            </div>
        </Layout>
    )
}

export default UserReviews