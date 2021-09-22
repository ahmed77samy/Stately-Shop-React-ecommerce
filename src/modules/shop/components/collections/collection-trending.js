import {collection_items} from "items";
import { Col, Container, Row } from "react-bootstrap";
import SecHeader from "shared/components/layout/sec-header"
import CollectionItem from "./collection-item";
import "./styles/collection-trending.scss"

function CollectionTrending() {
    let limited = 4;

    // map for productHeader to create CollectionItem
    const itemList = collection_items.map((item , index) => {
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