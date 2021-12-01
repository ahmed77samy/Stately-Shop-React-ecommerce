import ProfileIntro from "./profile-intro"
import ProfileBlogPosts from "./Blog-Posts"

function AsideProfileLeft () {
    return (
        <aside className="aside__left">
            <ProfileIntro />
            <ProfileBlogPosts />
        </aside>
    )
}

export default AsideProfileLeft