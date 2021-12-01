import Layout from "shared/components/layout/layout"
import SettingLayout from "./user-dashboard/setting-layout"

function UserSetting () {
    return (
        <Layout>
            <div id="user__setting__page">
                <SettingLayout />
            </div>
        </Layout>
    )
}

export default UserSetting