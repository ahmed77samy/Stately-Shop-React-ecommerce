import { Swiper, SwiperSlide } from "swiper/react"
import SponsersItem from "./sponsers-item"
import {sponsers} from "./items"
import SwiperCore , {Autoplay} from "swiper"

SwiperCore.use([Autoplay]);

function Sponsers () {
    // map for sponsers to return SponsersItem
    const itemList = sponsers.map((item,index) => {
        return (
            <SwiperSlide key={index}>
                <SponsersItem item={item} />
            </SwiperSlide>
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="sponsers">
            <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 4
                    }
                }}
            >
                {itemList}
            </Swiper>
        </div>
    )
}

export default Sponsers