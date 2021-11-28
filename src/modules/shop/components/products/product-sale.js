import Banner from "shared/components/layout/banner"
import photo1 from "assets/images/bg/2.jpg"
import ItemContent from "shared/components/layout/item-content"
import Timer from "./timer"
import "./styles/product-sale.scss"

function ProductSale () {
    return (
        <section className="product-sale com--pd">
            <div className="sec__content">
                <Banner bg={photo1} alt="sale">
                    <ItemContent>
                        <div className="wrapper">
                            <span>limited time out</span>
                            <h2 className="h1 text-uppercase">final sale</h2>
                            <Timer date={new Date(2021, 12, 7)} />
                            <p>take 20% off sale</p>
                            <button className="btn__default btn--border btn--primary">discover now</button>
                        </div>
                    </ItemContent>
                </Banner>
            </div>
        </section>
    )
}

export default ProductSale