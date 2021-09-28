import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore , {Navigation} from "swiper"
import {AngleLeftIcon , AngleRightIcon} from "shared/components/elements/icons"
import { useRef } from "react"
import { product_items } from "items"
import ProductItem from "./product-item"
import "./styles/product-related.scss"

SwiperCore.use([Navigation])

function ProductRelated () {
    let limited = 8
    let navigationPrevRef = useRef(0)
    let navigationNextRef = useRef(0)

    // map for productHeader to create productItem
    const itemList = product_items.map((item , index) => {
        return index < limited && (
            <SwiperSlide key={index}>
                <ProductItem item={item} />
            </SwiperSlide>
        ) 
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="product__related">
            {/*========== product__header ==========*/}
            <div className="product__header text-center">
                <h5 className="h2">product related</h5>
            </div>
            {/*========== product__header ==========*/}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                }}
                speed={500}
                spaceBetween={30}
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
            {/*========== product__control ==========*/}
            <div className="product__control center-block">
                <button className="btn--reset btn__icon prev" ref={navigationPrevRef}>
                    <AngleLeftIcon className="icon" />
                </button>
                <button className="btn--reset btn__icon next" ref={navigationNextRef}>
                    <AngleRightIcon className="icon" />
                </button>
            </div>
            {/*========== product__control ==========*/}
        </div>
    )
}

export default ProductRelated