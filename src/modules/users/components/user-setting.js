import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import SettingLayout from "./user-dashboard/setting-layout"

function UserSetting () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / My Setting")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="user__setting__page">
                <SettingLayout />
            </div>
        </Layout>
    )
}

export default UserSetting