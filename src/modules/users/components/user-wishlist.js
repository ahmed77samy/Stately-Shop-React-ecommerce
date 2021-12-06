import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import WishlistLayout from "./user-dashboard/wishlist-layout"

function UserWishlist () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / My Wishlist")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="user__wishlist__page">
                <WishlistLayout />
            </div>
        </Layout>
    )
}

export default UserWishlist