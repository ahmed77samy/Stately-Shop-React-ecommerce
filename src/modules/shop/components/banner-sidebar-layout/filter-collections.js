import { collection_items } from "items"
import { Fragment } from "react"
import { Form } from "react-bootstrap"

function FilterCollections () {

    /**
     * toggle active class from li
     * @param {event} e 
     */
    const handleChange = (e) => {
        e.target.closest("li").classList.toggle("active")
    }

    // map for collection items to create li items
    // check on index to add seperator
    const collectionList = collection_items.map((item , index) => {
        return (
            <Fragment key={index}>
                <li>
                    <Form.Check
                        type="checkbox"
                        label={`${item.content} (${item.products})`}
                        id={`banner-side-filter-collection-${Math.random()}-${index}`}
                        onChange={handleChange}
                    />
                </li>
                {
                    index !== (collection_items.length - 1) &&
                    <div className="bg--neutral--100 hr--1" />
                }
            </Fragment>
        )
    })

    /**
     * {@inheritdoc}
     */
    return(
        <ul className="m-0 list-unstyled collections">
            {collectionList}
        </ul>
    )
}

export default FilterCollections