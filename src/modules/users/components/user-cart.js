import Layout from "shared/components/layout/layout"
import CartLayout from "./user-dashboard/cart-layout"

function UserCart () {
    return (
        <Layout>
            <div id="user__cart__page">
                <CartLayout />
            </div>
        </Layout>
    )
}

export default UserCart