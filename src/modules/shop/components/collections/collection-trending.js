import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ShopApi from "../../services/api"
import SecHeader from "shared/components/layout/sec-header"
import CollectionItem from "./collection-item";
import { FETCH_COLLECTION } from "modules/shop/services/actions";
import { useEffect } from "react";
import "./styles/collection-trending.scss"

function CollectionTrending() {
    let limited = 4;
    const collections = useSelector(state => state.shopReducer.collections)
    const dispatch = useDispatch()


    // fetch the collections from ShopAPI
    useEffect(() => {
        ShopApi.getCategories()
        .then(data => {
            dispatch(FETCH_COLLECTION(data.data.payload))
        })
        .catch(() => {
            dispatch(FETCH_COLLECTION())
        })
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    // map for productHeader to create CollectionItem
    const itemList = collections?.map((item , index) => {
        return index < limited && (
            <Col key={index} xs={12} sm={6} lg={3}>
                <CollectionItem item={item} />
            </Col>
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <section className="com--pd collection__trending">
            <Container>
                {/*========== SecHeader ==========*/}
                <SecHeader 
                    title="collection trending"
                    description="discover more than 2000 products"
                    className="header--center"
                />
                {/*========== SecHeader ==========*/}
                {/*========== sec__content ==========*/}
                <div className="sec__content">
                    <Row className="layout--space">
                        {itemList}
                    </Row>
                </div>
                {/*========== sec__content ==========*/}
            </Container>
        </section>
    )
}

export default CollectionTrending