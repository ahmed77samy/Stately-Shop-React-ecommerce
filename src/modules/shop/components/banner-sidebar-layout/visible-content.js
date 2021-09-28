import React, { useState } from "react"
import { Modal } from "react-bootstrap";
import { FilterHeroIcon, GridIcon, ListIcon, TimesIcon } from "shared/components/elements/icons"
import HeaderModal from "shared/components/modals/header-modal";
import AsideFilter from "./aside-filter";

function VisibleContent () {
    const [modal , setModal] = useState(false)

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);

    /**
     * {@inheritdoc}
     */
    return(
        <div className="visible__content">
            {/*========== filter ==========*/}
            <div className="filter">
                <button className="btn--reset btn__icon btn--dark btn--border active" onClick={toggleModal}>
                    <FilterHeroIcon className="icon" /> filter
                </button>
            </div>
            {/*========== filter ==========*/}
            {/*========== sort ==========*/}
            <div className="sort">
                <div className="box">
                    <select id="banner-side-sort-select">
                        <option value="default">default</option>
                        <option value="popular">sort by most popular</option>
                        <option value="rating">sort by average rating</option>
                        <option value="latest">sort by latest</option>
                        <option value="price_low_to_high">sort by price low to high</option>
                        <option value="price_high_to_low">sort by price high to low</option>
                    </select>
                </div>
            </div>
            {/*========== sort ==========*/}
            {/*========== visible ==========*/}
            <div className="visible">
                <button className="btn--reset btn__icon btn--dark btn--border">
                    <ListIcon className="icon" />
                </button>
                <button className="btn--reset btn__icon btn--dark btn--border active">
                    <GridIcon className="icon" />
                </button>
            </div>
            {/*========== visible ==========*/}
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--left" show={modal} onHide={toggleModal} animation={false}>
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h6 m-0 text-uppercase">filter items</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                <Modal.Body>
                    {React.cloneElement(<AsideFilter />)}
                </Modal.Body>
            </HeaderModal>
            {/*========== HeaderModal ==========*/}

        </div>
    )
}

export default VisibleContent