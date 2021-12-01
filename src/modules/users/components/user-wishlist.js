import Layout from "shared/components/layout/layout"
import WishlistLayout from "./user-dashboard/wishlist-layout"

function UserWishlist () {
    return (
        <Layout>
            <div id="user__wishlist__page">
                <WishlistLayout />
            </div>
        </Layout>
    )
}

export default UserWishlist