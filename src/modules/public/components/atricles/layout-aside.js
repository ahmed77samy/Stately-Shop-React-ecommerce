import shop from "modules/shop/shop"
import { useEffect, Fragment } from "react"
import { useSelector } from "react-redux"
import BorderLoading from "shared/components/elements/border-loading"
import Card from "shared/components/layout/card"
import AsideAuthor from "./aside-author"
import AsideCollection from "./aside-collection.js"
import AsideProduct from "./aside-products.js"
import { article_items } from "./items"
import "./styles/aside.scss"

function LayoutAside () {
    const collections = useSelector(state => state.shopReducer.collections)
    const products = useSelector(state => state.shopReducer.products)
    const limit = 4

    // map for article Authors to create Aside Author
    const authorItemList = article_items.map((item , index) => {
        return limit > index && (
            <Fragment key={index}>
                <AsideAuthor item={item.author} />
                {(index + 1) < limit && <div className="bg--neutral--200 hr--1"></div>}
            </Fragment>
        )
    })

    // map for collections to create CollectionItem
    const collectionItemList = collections?.map((item , index) => {
        return index < limit && (
            <Fragment key={index}>
                <AsideCollection item={item} />
                {(index + 1) < limit && <div className="bg--neutral--200 hr--1"></div>}
            </Fragment>
        )
    })

    // map for products to create productItem
    const productItemList = products?.map((item , index) => {
        return index < limit && (
            <Fragment key={index}>
                <AsideProduct item={item} />
                {(index + 1) < limit && <div className="bg--neutral--200 hr--1"></div>}
            </Fragment>
        )
    })

    // fetch the collections from Shop
    useEffect(() => {
        let isMounted = true
        if(isMounted){
            shop.getCollections()
            shop.getProducts()
        }
        return () => isMounted = false;
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    /**
     * {@inheritdoc}
     */
    return (
        <aside>
            {/*========== aside__products ==========*/}
            <Card className="p-0 aside__group aside__products">
                <div className="aside__header">
                    <h5 className="h6 m-0">Latest products</h5>
                </div>
                <div className="aside__content">
                    {
                        // check collections to previews
                        collections === null ? <div className="aside__item"><BorderLoading /></div> :
                        collections === undefined ? <div className="aside__item"><h6 className="text-danger m-0">No Collections Found !</h6></div> :
                        collections && productItemList
                    }
                </div>
            </Card>
            {/*========== aside__products ==========*/}
            {/*========== aside__authors ==========*/}
            <Card className="p-0 aside__group aside__authors">
                <div className="aside__header">
                    <h5 className="h6 m-0">Discover Authors</h5>
                </div>
                <div className="aside__content">
                    {authorItemList}
                </div>
            </Card>
            {/*========== aside__authors ==========*/}
            {/*========== aside__collection ==========*/}
            <Card className="p-0 aside__group aside__collection">
                <div className="aside__header">
                    <h5 className="h6 m-0">collection trending</h5>
                </div>
                <div className="aside__content">
                    {
                        // check collections to previews
                        collections === null ? <div className="aside__item"><BorderLoading /></div> :
                        collections === undefined ? <div className="aside__item"><h6 className="text-danger m-0">No Collections Found !</h6></div> :
                        collections && collectionItemList
                    }
                </div>
            </Card>
            {/*========== aside__collection ==========*/}
        </aside>
    )
}

export default LayoutAside