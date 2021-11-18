import FavouriteItem from "./favourite-item"
import PropTypes from "prop-types"
import { TrashIcon } from "shared/components/elements/icons"

function Favourite (props) {

    // map for userdata.favourite to create product item
    const favouriteList = props.userData.favourite.map((item , index) => {
        return <FavouriteItem item={item} key={index} />
    })
    
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
            {/*========== tab__content ==========*/}
        </div>
    )
}

Favourite.propTypes = {
    userData : PropTypes.object.isRequired
}

export default Favourite