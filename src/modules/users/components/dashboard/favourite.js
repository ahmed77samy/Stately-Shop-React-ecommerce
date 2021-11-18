import FavouriteItem from "./favourite-item"
import { TrashIcon } from "shared/components/elements/icons"
import { Link } from "react-router-dom"
import { useState } from "react"

function Favourite (props) {
    let limited = 5
    const [limit , setLimit] = useState(limited)

    // map for userdata.favourite to create product item
    const favouriteList = props.data?.map((item , index) => {
        return index < limit && <FavouriteItem item={item} key={index} />
    })

    /**
     * set limit state to show more items
     * @param {event} e 
     */
     const handleClick = (e) => {
        e.preventDefault()
        if(!(limit > props.data.length)) {
            return setLimit(limit => limit + limited)
        }
    }
    
    /**
     * {@inheritdoc}
     */
    return (
        <div className="favourite">
            {/*========== tab__header ==========*/}
            <div className="tab__header">
                <div>
                    <h3>Your favourite</h3>
                </div>
                <button className="btn--reset btn__default bg-danger"><TrashIcon />&nbsp;&nbsp; delete all</button>
            </div>
            {/*========== tab__header ==========*/}
            {/*========== tab__content ==========*/}
            <div className="tab__content">
                {favouriteList}
            </div>
            {
                props.data && props.data.length > 0 && limit < props.data.length && 
                <Link to="/" className="anchors--reset d-block text-center text-capitalize text--primary--500 mx-auto mt-2" onClick={handleClick}>show more</Link>
            }
            {/*========== tab__content ==========*/}
        </div>
    )
}

export default Favourite