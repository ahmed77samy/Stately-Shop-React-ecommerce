import { title } from "core/meta-data"
import { useEffect } from "react"
import Layout from "shared/components/layout/layout"
import InnerContactUs from "./contact-us/inner-contact-us"

function ContactUs () {
    /**
     * set the meta data
     */
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            title("Stately Shop / Contact Us")
        }
        return () => isMounted = false;
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <Layout>
            <div id="contact__us__page">
                <InnerContactUs />
            </div>
        </Layout>
    )
}

export default ContactUs