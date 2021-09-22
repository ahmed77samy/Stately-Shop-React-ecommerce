import SliderItem from "./slider-item"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore , {Navigation} from "swiper"
import {product_items} from "items"
import {AngleLeftIcon , AngleRightIcon} from "shared/components/elements/icons"
import { useRef } from "react";
import "./styles/slider.scss"

SwiperCore.use([Navigation])

function Slider () {
    let navigationPrevRef = useRef(0)
    let navigationNextRef = useRef(0)

    // filter the items and return its slideshow
    const productHeader = product_items.filter((item , inex) => {
        return item.slideshow
    })

    // map for productHeader to create SliderItem
    const itemList = productHeader.map((item , inex) => {
        return (
            <SwiperSlide key={inex}>
                {(values) => 
                    <SliderItem values={values} item={item} />
                }
            </SwiperSlide>
        ) 
    })

    /**
     * {@inheritdoc}
     */
    return (
        <section className="com--non--pd slider">
            <Swiper
                slidesPerView={1}
                speed={800}
                navigation={{
                    disabledClass: "disabled",
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                /**
                 * Delay execution for the refs to be defined
                 * Override prevEl & nextEl now that refs are defined
                 * Re-init navigation
                 */
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                        swiper.params.navigation.nextEl = navigationNextRef.current
                        swiper.navigation.destroy()
                        swiper.navigation.init()
                        swiper.navigation.update()
                    })
                }}
            >
                {itemList}
            </Swiper>
            {/*========== slider__control ==========*/}
            <div className="slider__control center-block">
                <button className="btn--reset btn__icon prev" ref={navigationPrevRef}>
                    <AngleLeftIcon className="icon" />
                </button>
                <button className="btn--reset btn__icon next" ref={navigationNextRef}>
                    <AngleRightIcon className="icon" />
                </button>
            </div>
            {/*========== slider__control ==========*/}
        </section>
    )
}

export default Slider