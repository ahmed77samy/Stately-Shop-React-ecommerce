import Layout from "shared/components/layout/layout"
import OrdersLayout from "./user-dashboard/orders-layout"

function UserOrders () {
    return (
        <Layout>
            <div id="user__orders__page">
                <OrdersLayout />
            </div>
        </Layout>
    )
}

export default UserOrders