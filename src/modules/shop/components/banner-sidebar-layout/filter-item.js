import { useState } from "react"
import { AngleUpIcon, AngleDownIcon } from "shared/components/elements/icons"
import Card from "shared/components/layout/card"
import ItemContent from "shared/components/layout/item-content"
import PropTypes from "prop-types"
import "./styles/filter-item.scss"

function FilterItem (props) {
    const { children, title, className } = props
    const [isopen , setIsOpen] = useState(true)

    // set state IsOpen to toggle isopen
    const toggle = () => setIsOpen(!isopen)

    /**
     * {@inheritdoc}
     */
    return(
        <div {...props} className={`filter__item ${className}`}>
            <Card>
                <div className={`item__header d-flex justify-content-between align-items-center ${isopen && "isopen"}`} onClick={toggle} role="button">
                    <h5 className="text-uppercase mb-0">{title}</h5>
                    { isopen ? <AngleUpIcon className="icon" /> : <AngleDownIcon className="icon" /> }
                </div>
                <ItemContent className={isopen && "isopen"}>
                    {children}
                </ItemContent>
            </Card>
        </div>
    )
}

FilterItem.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default FilterItem