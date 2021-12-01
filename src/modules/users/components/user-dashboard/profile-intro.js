import { FacebookIcon, GoogleIcon, TwitterIcon } from "shared/components/elements/icons"
import Card from "shared/components/layout/card"

function ProfileIntro () {
    return (
        <div className="profile__intro">
            <Card className="p-0">
                {/*========== aside__header ==========*/}
                <div className="aside__header">
                    <h5 className="h6 m-0">profile intro</h5>
                </div>
                {/*========== aside__header ==========*/}
                {/*========== aside__content ==========*/}
                <div className="aside__content">
                    <div className="aside__item">
                        <h6 className="font--size--medium text--neutral--700">About Me:</h6>
                        <span className="font--size--small">Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.</span>
                    </div>
                    <div className="aside__item">
                        <h6 className="font--size--medium text--neutral--700">Favourite TV Shows:</h6>
                        <span className="font--size--small">Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</span>
                    </div>
                    <div className="aside__item">
                        <h6 className="font--size--medium text--neutral--700">Favourite Music Bands / Artists:</h6>
                        <span className="font--size--small">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
                    </div>
                    <div className="aside__item">
                        <h6 className="text--neutral--700 mb-4">Social Networks:</h6>
                        <div className="social">
                            <a href="https://www.facebook.com/me" target="_blank" rel="noopener noreferrer" className="anchors--reset facebook">
                                <FacebookIcon className='icon' />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="anchors--reset twitter">
                                <TwitterIcon className='icon' />
                            </a>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="anchors--reset google">
                                <GoogleIcon className='icon' />
                            </a>
                        </div>
                    </div>
                </div>
                {/*========== aside__content ==========*/}
            </Card>
        </div>
    )
}

export default ProfileIntro