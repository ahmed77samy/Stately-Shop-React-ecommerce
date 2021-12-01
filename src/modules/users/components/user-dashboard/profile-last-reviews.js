import Card from "shared/components/layout/card"
import { user_items } from "items"
import { Link } from "react-router-dom"

function ProfileLastReviews () {
    const limited = 6
    const reviews = user_items[0].reviews

    const reviewsList = reviews.map((item , index) => {
        return limited > index && <img key={index} src={item.product.photo} alt="product" role="button" />
    })

    return (
        <div className="profile__last__reviews">
            <Card className="p-0">
                {/*========== aside__header ==========*/}
                <div className="aside__header">
                    <h5 className="h6 m-0">Last reviews</h5>
                </div>
                {/*========== aside__header ==========*/}
                {/*========== aside__content ==========*/}
                <div className="aside__content">
                    <div className='aside__item'>
                        {reviewsList}
                    </div>
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

export default ProfileLastReviews