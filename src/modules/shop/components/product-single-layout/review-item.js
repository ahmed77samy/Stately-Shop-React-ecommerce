import ConfigService from "core/config-service"
import UserApi from "modules/users/services/api"
import PropTypes from "prop-types"
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import BorderLoading from "shared/components/elements/border-loading"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import ProductFiveStars from "../products/product-fivestars"

function ReviewItem (props) {
    const { re_des, re_rate, user_id } = props.item
    const [user , setUser] = useState(null)
    const main_root = ConfigService.config.get("endpoints.url")
    const token = useSelector(state => state.userReducer.user?.access_token)

    useEffect(() => {
        let isMounted = true
        UserApi.getUsers(user_id , token)
        .then((data) => {
            if(isMounted) {
                setUser(data.data.payload)
            }
        })
        .catch((res) => {
            if(isMounted) {
                setUser(undefined)
            }
        })
        return () => isMounted = false;
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    /**
     * {@inheritdoc}
     */
    return user === null ? 
    <BorderLoading /> : 
    user === undefined ? <p className="text-danger">An unexpected error occurred. Please try again soon</p> :
    (
        <div className="review__item">
            {/*========== Figure ==========*/}
            <Figure className="anchors--effect effect--2"> 
                <Link to="/" className="anchors--reset">
                    <img src={`${main_root}/${user.img}`} alt="user" />
                </Link>
            </Figure>
            {/*========== Figure ==========*/}
            {/*========== ItemContent ==========*/}
            <ItemContent>
                <div className="item__header mb-2">
                    <div>
                        <ProductFiveStars stars={re_rate} className="mb-2" />
                        <h5 className="h6 m-0">
                            <Link to="/" className="anchors--reset">{user.Fname + user.Lname}</Link>
                        </h5>
                    </div>
                    <span className="font--size--small ml-2">3 day ago</span>
                </div>
                <p>
                    {re_des}
                </p>
            </ItemContent>
            {/*========== ItemContent ==========*/}
        </div>
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ReviewItem