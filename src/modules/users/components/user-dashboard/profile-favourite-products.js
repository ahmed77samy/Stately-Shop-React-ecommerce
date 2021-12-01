import Card from "shared/components/layout/card"
import { useSelector } from "react-redux"
import BorderLoading from "shared/components/elements/border-loading"
import ProfileFavouriteProductItem from "./profile-favourite-product-item"
import { Link } from "react-router-dom"

function ProfileFavouriteProducts () {
    const limited = 5
    const user_wishlist = useSelector(state => state.userReducer.user_wishlist)

    // map for userdata.wishlist to create product item
    const wishlistList = user_wishlist?.map((item , index) => {
        return index < limited && <ProfileFavouriteProductItem item={item} key={index} />
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="profile__favourite__product">
            <Card className="p-0">
                {/*========== aside__header ==========*/}
                <div className="aside__header">
                    <h5 className="h6 m-0">favourite product</h5>
                </div>
                {/*========== aside__header ==========*/}
                {/*========== aside__content ==========*/}
                <div className="aside__content">
                    {
                        // check user_wishlist to previews
                        user_wishlist === null ? <BorderLoading /> :
                        user_wishlist === undefined ? <p className="text-danger m-0">An unexpected error occurred. Please try again soon</p> :
                        user_wishlist.length === 0 ? <p className="m-0">No Products In Wishlist <Link to="/shop/banner-sidebar" className="anchors--reset text--primary--500">Shop Now.</Link> </p> :
                        user_wishlist && (
                            <ul className="list-unstyled m-0">
                                {wishlistList}
                            </ul>
                        )
                    }
                </div>
                {/*========== aside__content ==========*/}
                {/*========== aside__footer ==========*/}
                <div className="aside__footer">
                    <Link to="/user/reviews" className="anchors--reset font--size--small">show all</Link>
                </div>
                {/*========== aside__footer ==========*/}
            </Card>
        </div>
    )
}

export default ProfileFavouriteProducts