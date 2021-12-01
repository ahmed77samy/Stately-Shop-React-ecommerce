import ConfigService from "core/config-service"
import { useSelector } from "react-redux"
import { CommentIcon, HeartIcon, ShareIcon } from "shared/components/elements/icons"
import photo1 from "assets/images/users/photo-1.jpg"
import photo2 from "assets/images/users/photo-2.jpg"
import photo3 from "assets/images/users/photo-3.jpg"
import photo4 from "assets/images/users/photo-4.jpg"
import photo5 from "assets/images/users/photo-5.jpg"
import Card from "shared/components/layout/card"
import { useRef, useEffect } from "react"

function ProfileContentItem () {
    let user_data = useSelector(state => state.userReducer.user.user)
    const main_root = ConfigService.config.get("endpoints.url")
    const imgsRef = useRef(0)

    useEffect(() => {
        const imgs = imgsRef.current.querySelectorAll("img")
        let i = 0;
        imgs.forEach((img) => {
            img.style.transform = `translateX(-${i}px)`
            i += 7
        })
    },[])

    /**
     * {@inheritdoc}
     */
    return (
        <div className="profile__content__item">
            <Card>
                {/*========== item__header ==========*/}
                <div className="item__header">
                    <img src={`${main_root}/${user_data.img}`} alt="user" />
                    <div className="w-100">
                        <div className="d-flex">
                            <h6 className="m-0" role="button">{user_data.Fname + " " + user_data.Lname}</h6>
                            <span className="ml-1">share a <p role="button" className="m-0">link</p></span>
                        </div>
                        <span className='font--size--small'>19 hours ago</span>
                    </div>
                </div>
                {/*========== item__header ==========*/}
                {/*========== item__content ==========*/}
                <div className="item__content">
                    <p className="m-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                </div>
                {/*========== item__content ==========*/}
                {/*========== item__footer ==========*/}
                <div className="item__footer">
                    <div className="d-flex">
                        <div role="button" className="actions">
                            <HeartIcon className="icon" />
                            <span className='font--size--small'>15 Likes</span>
                        </div>
                        <div className="like__imgs" ref={imgsRef}>
                            <img src={photo1} alt="user-like" />
                            <img src={photo2} alt="user-like" />
                            <img src={photo3} alt="user-like" />
                            <img src={photo4} alt="user-like" />
                            <img src={photo5} alt="user-like" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div role="button" className="actions">
                            <CommentIcon className="icon" />
                            <span className='font--size--small'>11 Comment</span>
                        </div>
                        <div role="button" className="actions">
                            <ShareIcon className="icon" />
                            <span className='font--size--small'>6 Share</span>
                        </div>
                    </div>
                </div>
                {/*========== item__footer ==========*/}
            </Card>
        </div>
    )
}

export default ProfileContentItem