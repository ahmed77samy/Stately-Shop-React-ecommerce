import { NavigateTo } from "core/route-service";
import Layout from "shared/components/layout/layout"
import DashboardLayout from "./dashboard/dashboard-layout"
import { DashBoardItems } from "./dashboard/items";

function User ({props}) {
    // check Key is true
    let Key = DashBoardItems.some((item) => {
        return props.match.params.Key === item.eventKey
    })

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="user__page">
                <DashboardLayout eventKey = {Key ? props.match.params.Key : props.match.params.Key === undefined ? DashBoardItems[0].eventKey : NavigateTo("/404")} />
            </div>
        </Layout>
    )
}

export default User