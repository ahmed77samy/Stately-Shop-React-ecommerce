import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SecHeader from "shared/components/layout/sec-header"
import CollectionItem from "./collection-item";
import { useEffect } from "react";
import "./styles/collection-trending.scss"
import shop from "modules/shop/shop";

function CollectionTrending() {
    let limited = 4;
    const collections = useSelector(state => state.shopReducer.collections)

    // map for productHeader to create CollectionItem
    const itemList = collections?.map((item , index) => {
        return index < limited && (
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