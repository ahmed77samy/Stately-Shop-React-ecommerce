import ProfileLastReviews from "./profile-last-reviews"
import ProfileSpotifyPlaylist from "./profile-spotify-playlist"
import ProfileFavouriteProducts from "./profile-favourite-products.js"

function AsideProfileRight () {
    return (
        <aside className="aside__right">
            <ProfileLastReviews />
            <ProfileFavouriteProducts />
            <ProfileSpotifyPlaylist />
        </aside>
    )
}

export default AsideProfileRight