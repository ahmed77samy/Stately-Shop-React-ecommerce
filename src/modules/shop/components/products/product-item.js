import { useState } from "react"
import { Link } from "react-router-dom"
import FiveStars from "shared/components/elements/fivestars"
import Salary from "shared/components/elements/salary"
import ThumbnailButtons from "shared/components/elements/thumbnail-buttons"
import Card from "shared/components/layout/card"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"
import ProductModal from "shared/components/modals/product-modal"

function ProductItem (props) {
    const {name , photo , sale, rating, salary, newest} = props.item
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
    return(
        <Card>
            <div className='product__item'>
                {/*========== figure ==========*/}
                <Figure className="anchors--effect">
                    <div className="wrapper__badge">
                        {newest && <span className="badge badge--right bg--primary--400 text--white">new</span>}
                        {sale?.sale && <span className="badge badge--right bg--secondary--400 text--white">sale</span>}
                    </div>
                    <ThumbnailButtons />
                    <Link to="/" className="anchors--reset" onClick={handleClick}>
                        <img src={photo} alt="product" className="w-100" />
                    </Link>
                    <ProductModal item={props.item} modal={modal} toggleModal={toggleModal}/>
                </Figure>
                {/*========== figure ==========*/}
                {/*========== item__content ==========*/}
                <ItemContent>
                    <h4 className="h6">
                        <Link to="/" className="anchors--reset">
                            {name}
                        </Link>
                    </h4>
                    <FiveStars stars={rating} reviews={12} />
                    <Salary sale={sale} salary={salary} />
                </ItemContent>
                {/*========== item__content ==========*/}
            </div>
        </Card>
    )
}

export default ProductItem