import Card from "shared/components/layout/card"
import photo1 from "assets/images/users/spotify-1.jpg"
import photo2 from "assets/images/users/spotify-2.jpg"
import photo3 from "assets/images/users/spotify-3.jpg"
import photo4 from "assets/images/users/spotify-4.jpg"
import photo5 from "assets/images/users/spotify-5.jpg"

function ProfileSpotifyPlaylist () {
    return (
        <div className="profile__spotify__list">
            <Card className="p-0">
                {/*========== aside__header ==========*/}
                <div className="aside__header">
                    <h5 className="h6 m-0">My spotify playlist</h5>
                </div>
                {/*========== aside__header ==========*/}
                {/*========== aside__content ==========*/}
                <div className="aside__content">
                    <ul className="list-unstyled m-0">
                        {/*========== aside__item ==========*/}
                        <li className="aside__item">
                            <div className="list__item">
                                <img src={photo1} alt="spotify" />
                                <div className="d-flex justify-content-between w-100">
                                    <div>
                                        <h6 className="font--size--medium text--neutral--700 text-capitalize" role="button">
                                            Leap of Faith
                                        </h6>
                                        <span className="font--size--small">System of a Revenge</span>
                                    </div>
                                    <span className="font--size--small">3:22</span>
                                </div>
                            </div>
                        </li>
                        {/*========== aside__item ==========*/}
                        {/*========== aside__item ==========*/}
                        <li className="aside__item">
                            <div className="list__item">
                                <img src={photo2} alt="spotify" />
                                <div className="d-flex justify-content-between w-100">
                                    <div>
                                        <h6 className="font--size--medium text--neutral--700 text-capitalize" role="button">
                                            The Past Starts Slow and Ends
                                        </h6>
                                        <span className="font--size--small">System of a Revenge</span>
                                    </div>
                                    <span className="font--size--small">1:20</span>
                                </div>
                            </div>
                        </li>
                        {/*========== aside__item ==========*/}
                        {/*========== aside__item ==========*/}
                        <li className="aside__item">
                            <div className="list__item">
                                <img src={photo3} alt="spotify" />
                                <div className="d-flex justify-content-between w-100">
                                    <div>
                                        <h6 className="font--size--medium text--neutral--700 text-capitalize" role="button">
                                            The Pretender
                                        </h6>
                                        <span className="font--size--small">System of a Revenge</span>
                                    </div>
                                    <span className="font--size--small">3:00</span>
                                </div>
                            </div>
                        </li>
                        {/*========== aside__item ==========*/}
                        {/*========== aside__item ==========*/}
                        <li className="aside__item">
                            <div className="list__item">
                                <img src={photo4} alt="spotify" />
                                <div className="d-flex justify-content-between w-100">
                                    <div>
                                        <h6 className="font--size--medium text--neutral--700 text-capitalize" role="button">
                                            Seven Nation Army
                                        </h6>
                                        <span className="font--size--small">System of a Revenge</span>
                                    </div>
                                    <span className="font--size--small">2:40</span>
                                </div>
                            </div>
                        </li>
                        {/*========== aside__item ==========*/}
                        {/*========== aside__item ==========*/}
                        <li className="aside__item">
                            <div className="list__item">
                                <img src={photo5} alt="spotify" />
                                <div className="d-flex justify-content-between w-100">
                                    <div>
                                        <h6 className="font--size--medium text--neutral--700 text-capitalize" role="button">
                                            We Can Be Heroes
                                        </h6>
                                        <span className="font--size--small">System of a Revenge</span>
                                    </div>
                                    <span className="font--size--small">1:33</span>
                                </div>
                            </div>
                        </li>
                        {/*========== aside__item ==========*/}
                    </ul>
                </div>
                {/*========== aside__content ==========*/}
            </Card>
        </div>
    )
}

export default ProfileSpotifyPlaylist