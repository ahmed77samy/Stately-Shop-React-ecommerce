import Layout from "shared/components/layout/layout"
import Clients from "./clients/clients"
import Facts from "./facts/facts"
import SliderAboutUs from "./slider/slider-about-us"
import Story from "./story/story"

function AboutUs () {
    return (
        <Layout>
            <div id="about__us__page">
                <SliderAboutUs />
                <Facts />
                <Story />
                <Clients />
            </div>
        </Layout>
    )
}

export default AboutUs