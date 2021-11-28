import shop from "modules/shop/shop"
import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import BorderLoading from "shared/components/elements/border-loading"
import CollectionItem from "./collection-item"

function Collection () {
    let limited = 12
    const [limit , setLimit] = useState(limited)
    const collections = useSelector(state => state.shopReducer.collections)
    
    /**
     * set limit state to show more items
     * @param {event} e 
     */
    const handleClick = () => {
        if(!(limit > collections.length)) {
            return setLimit(limit => limit + limited)
        }
    }

    // map for productHeader to create CollectionItem
    const itemList = collections?.map((item , index) => {
        return index < limit && (
            <Col key={index} xs={12} sm={6} lg={3}>
                <CollectionItem item={item} />
            </Col>
        )
    })


    // fetch the collections from Shop
    useEffect(() => {
        let isMounted = true
        if(isMounted){
            shop.getCollections()
        }
        return () => isMounted = false;
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="collection__list">
            <Row className="layout--space--20">
                {
                    // check collection to previews
                    collections === null ? <Col xs={12}><BorderLoading /></Col> :
                    (collections === undefined || collections.length === 0) ? <Col xs={12}><h6 className="text-center text-danger">No Collections Found !</h6></Col> :
                    collections && itemList
                }
            </Row>
            {collections && collections.length > 0 && limit < collections.length && <button to="/" className="mx-auto mt-5 btn--reset btn__default btn--primary" onClick={handleClick}>show more</button>}
        </div>
    )
}

export default Collection