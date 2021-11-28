import { Link } from "react-router-dom"
import Card from "shared/components/layout/card"
import Figure from "shared/components/layout/figure"

function SponsersItem (props) {
    let {photo} = props.item

    // prevent default
    const handleClick = e => e.preventDefault()

    /**
     * {@inheritdoc}
     */
    return (
        <Card>
            {/*========== Figure ==========*/}
            <Figure classes="anchors--effect">
                <Link to="/" onClick={handleClick}>
                    <img src={photo} alt="client" />
                </Link>
            </Figure>
            {/*========== Figure ==========*/}
        </Card>
    )
}

export default SponsersItem