import { useState } from 'react';
import ShopApi from "modules/shop/services/api"
import ResultItem from './result-item';
import { Link } from 'react-router-dom';
import { TimesIcon , SearchIcon } from '../elements/icons';
import { Modal } from 'react-bootstrap';
import HeaderModal from '../modals/header-modal';
import MyButton from '../elements/button';

function UserSearch () {
    const [searchResult, setSearchResult] = useState(null)
    const [keyword, setKeyword] = useState("")
    const [modal , setModal] = useState(false)
    const [waitreq , setWaitreq] = useState(false)
    const limited = 5

    /**
     * set state for keyword
     * @param {event} e 
     * @returns {function}
     */
    const handleKeyword = (e) => {
        let value = e.target.value;
        setKeyword(value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if(keyword.length > 0) {
            setWaitreq(true)
            ShopApi.searchProduct(keyword)
            .then(({data}) => {
                setSearchResult(data.payload)
                setWaitreq(false)
            })
            .catch(() => {
                setSearchResult(undefined)
                setWaitreq(false)
            })
        }
    }

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);
    
    // map for searchResult to create result item
    const resultList = searchResult?.map((item , index) => {
        return index < limited && (
            <ResultItem key={index} item={item} />
        )
    })
    
    /**
     * {@inheritdoc}
     */
    return(
        <div className="user__search">
            {/*========== wrapper__badge ==========*/}
            <div className="wrapper__badge">
                <SearchIcon className="icon" onClick={toggleModal} />
            </div>
            {/*========== wrapper__badge ==========*/}
            {/*========== HeaderModal ==========*/}
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal}>
                {/*========== Modal.Header ==========*/}
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h6 m-0 text-uppercase">search our site</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                {/*========== Modal.Header ==========*/}
                {/*========== modal__fragment ==========*/}
                <div className="modal__fragment">
                    <form className="d-flex flex-wrap" onSubmit={handleSearch}>
                        <input type="text" placeholder="Search For Product" className="input__default input--border" onChange={handleKeyword} />
                        <MyButton type="submit" waitrequest={`${waitreq}`} value={<SearchIcon className="icon" />} className={`btn__default btn--dark ${waitreq && 'disabled'}`} />
                    </form>
                    {searchResult && searchResult.length > 0 && (
                        <Link to={`/shop/banner-sidebar/${keyword}`} className="text-uppercase anchors--reset d-inline-flex align-items-center mt-4">
                            view all items {`(${searchResult.length})`}
                        </Link>
                    )}
                </div>
                {/*========== modal__fragment ==========*/}
                {/*========== Modal.Body ==========*/}
                <Modal.Body>
                    <div className="body__result">
                        {/* {
                            !searchEmpty && (resultList.length > 0 ?
                            (
                                <>
                                    {resultList}
                                    <Link to="/" className="show__all mx-auto mt-2 mb-4 text-uppercase anchors--reset d-flex align-items-center">
                                        show 
                                        {searchResult.length > 0 ? ` (${searchResult.length})` : " all"}
                                        <ChevronRightLongIcon className="icon ml-2" />
                                    </Link>
                                </>
                            ) : 
                            <p className="m-0 text-uppercase">no products.</p>)
                        } */}
                        {
                            // check user_wshl to previews
                            searchResult === undefined ? <p className="text-danger">An unexpected error occurred. Please try again soon</p> :
                            searchResult?.length === 0 ? <p>No Products Founded !</p> :
                            searchResult && resultList
                        }
                    </div>
                </Modal.Body>
                {/*========== Modal.Body ==========*/}
            </HeaderModal>
            {/*========== HeaderModal ==========*/}
        </div>
    )
}

export default UserSearch