import { Tabs as BSTabs } from "react-bootstrap"
import "./styles/tabs.scss"

function Tabs (props) {
    return (
        <BSTabs {...props} className={`my__tabs ${props.className}`}>
            {props.children}
        </BSTabs>
    )
}

export default Tabs