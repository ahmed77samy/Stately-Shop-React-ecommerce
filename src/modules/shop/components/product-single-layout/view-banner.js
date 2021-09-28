import Figure from "shared/components/layout/figure"

function ViewBanner (props) {
    const {photo} = props.item
    return(
        <Figure>
            <img src={photo} alt="product" />
        </Figure>
    )
}

export default ViewBanner