import Card from "shared/components/layout/card"

function ProfileBlogPosts () {
    return (
        <div className="profile__blog__posts">
            <Card className="p-0">
                {/*========== aside__header ==========*/}
                <div className="aside__header">
                    <h5 className="h6 m-0">Blog Posts</h5>
                </div>
                {/*========== aside__header ==========*/}
                {/*========== aside__content ==========*/}
                <div className="aside__content">
                    <div className="aside__item">
                        <h6 className="text--neutral--700 h5" role="button">My Perfect Vacations in South America and Europe</h6>
                        <p className="font--size--small">Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.</p>
                        <span className="font--size--small">7 hours ago</span>
                    </div>
                    <div className="aside__item">
                        <h6 className="text--neutral--700 h5" role="button">The Big Experience of Travelling Alone</h6>
                        <p className="font--size--small">Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.</p>
                        <span className="font--size--small">March 18th, at 6:52pm</span>
                    </div>
                </div>
                {/*========== aside__content ==========*/}
            </Card>
        </div>
    )
}

export default ProfileBlogPosts