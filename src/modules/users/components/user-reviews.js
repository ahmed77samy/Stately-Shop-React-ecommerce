import Layout from "shared/components/layout/layout"
import ReviewsLayout from "./user-dashboard/reviews-layout"

function UserReviews () {
    return (
        <Layout>
            <div id="user__reviews__page">
                <ReviewsLayout />
            </div>
        </Layout>
    )
}

export default UserReviews