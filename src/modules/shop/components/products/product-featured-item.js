import ConfigService from "core/config-service"
import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "shared/components/layout/card"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import ProductModal from "shared/components/modals/product-modal"
import ProductFiveStars from "./product-fivestars"
import ProductSalary from "./product-salary"

function ProductFeaturedItem (props) {
    let {pro_name , mainImage , pro_rate, price, id} = props.item
    const main_root = ConfigService.config.get("endpoints.url")
    const [modal , setModal] = useState(false)

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    /**
     * set modal to true to handle action
     * @param {event} e 
     */
    const handleClick = (e) => {
        e.preventDefault()
        toggleModal()
    }

    /**
     * {@inheritdoc}
     */
    return (
        <Card>
            <div className='product__item'>
                {/*========== figure ==========*/}
                <Figure className="anchors--effect effect--2">
                    <Link to="/" className="anchors--reset" onClick={handleClick}>
                        <img src={`${main_root}/${mainImage}`} alt="product" className="w-100" />
                    </Link>
                    <ProductModal item={props.item} show={modal} onHide={toggleModal}/>
                </Figure>
                {/*========== figure ==========*/}
                {/*========== item__content ==========*/}
                <ItemContent>
                    <h4 className="h6">
                        <Link to={`/shop/product-single/${id}`} className="anchors--reset">
                            {pro_name}
                        </Link>
                    </h4>
                    <ProductFiveStars stars={pro_rate} />
                    <ProductSalary salary={price} />
                </ItemContent>
                {/*========== item__content ==========*/}
            </div>
        </Card>
    )
}

export default ProductFeaturedItem