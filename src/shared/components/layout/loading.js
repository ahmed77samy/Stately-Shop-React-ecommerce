import BorderLoading from "shared/components/elements/border-loading"
import Layout from "shared/components/layout/layout"
import "./styles/loading.scss"

function Loading () {
    return (
        <Layout>
            <div id="loading__page">
                <BorderLoading />
            </div>
        </Layout>
    )
}

export default Loading