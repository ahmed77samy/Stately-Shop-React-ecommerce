import { FacebookIcon, GoogleIcon, TwitterIcon } from "shared/components/elements/icons"
import ItemContent from "shared/components/layout/item-content"
import { Link } from "react-router-dom"
import ProductViewForm from "./product-view-form"
import { Fragment } from "react"
import ProductStock from "../products/product-stock"
import ProductSalary from "../products/product-salary"
import ProductFiveStars from "../products/product-fivestars"

function ViewContent (props) {
    const { name, salary, sale, rating, description, category } = props.item

    // map for category to create category item
    const categoryList = category.map((item , index) => {
        return (
            <Fragment key={index}>
                <Link to={item.path} className="anchors--reset text-capitalize">{item.name}</Link>
                {index < (category.length - 1) && <>,&nbsp; </>}
            </Fragment>
        )
    })
    
    /**
     * {@inheritdoc}
     */
    return(
        <div className="view__content">
            <ItemContent>
                {/*========== item ==========*/}
                <div>
                    <span>Code: 12345670</span>
                    <h2 className="h4 m-0 mt-1 text-uppercase">{name}</h2>
                </div>
                {/*========== item ==========*/}
                {/*========== item ==========*/}
                <div className="d-flex flex-wrap align-items-center">
                    <ProductSalary className="w-100" sale={sale} salary={salary} />
                    <ProductFiveStars className="mr-3" stars={rating} reviews={12} />
                    <ProductStock stock={true} />
                </div>
                {/*========== item ==========*/}
                <p>{description.short}</p>
                <ProductViewForm />
                {/*========== ref ==========*/}
                <div className="content__ref">
                    <p>
                        <label className="m-0 d-inline mr-1">tags:&nbsp;</label>
                        <span>{categoryList}</span>
                    </p>
                    <p>
                        <label className="m-0 d-inline mr-1">brand:&nbsp;</label>
                        <span>{categoryList}</span>
                    </p>
                    <p className="social">
                        <Link className="anchors--reset btn__icon btn--small google" to="/">
                            <GoogleIcon className="icon" />
                        </Link>
                        <Link className="anchors--reset btn__icon btn--small twitter" to="/">
                            <TwitterIcon className="icon" />
                        </Link>
                        <Link className="anchors--reset btn__icon btn--small facebook" to="/">
                            <FacebookIcon className="icon" />
                        </Link>
                    </p>
                </div>
                {/*========== ref ==========*/}
            </ItemContent>
        </div>
    )
}

export default ViewContent