import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import OrdersLayout from "./user-dashboard/orders-layout"

function UserOrders () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / My Oreders")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="user__orders__page">
                <OrdersLayout />
            </div>
        </Layout>
    )
}

export default UserOrders