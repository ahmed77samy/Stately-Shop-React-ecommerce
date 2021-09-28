import { useState , useRef } from 'react';
import { product_items } from 'items';
import ResultItem from './result-item';
import { Link } from 'react-router-dom';
import { TimesIcon , ChevronRightLongIcon , SearchIcon } from '../elements/icons';
import { Modal } from 'react-bootstrap';
import HeaderModal from '../modals/header-modal';

function UserSearch () {
    const [searchResult, setSearchResult] = useState([])
    const [searchEmpty, setSearchEmpty] = useState(true)
    const buttonSearchRef = useRef(0)
    const [modal , setModal] = useState(false)
    const limited = 10

    /**
     * handle search button on change
     * check if value empty to do action
     * set state for search result
     * @param {event} e 
     * @returns {function}
     */
    function handleSearch(e) {
        let value = e.target.value.toLowerCase();
        setSearchEmpty(false)
        if(value === "") {
            setSearchEmpty(true)
            return setSearchResult([])
        }
        const filter = product_items.filter((item) => item.name.toLowerCase().includes(value))
        setSearchResult(filter)
    }

    // toogle modal by setModal
    const toggleModal = () => setModal(!modal);
    
    // map for searchResult to create result item
    const resultList = searchResult.map((item , index) => {
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
            <HeaderModal className="modal--right" show={modal} onHide={toggleModal} animation={false}>
                <Modal.Header className="dark--mode">
                    <Modal.Title><h3 className="h6 m-0 text-uppercase">search our site</h3></Modal.Title>
                    <TimesIcon onClick={toggleModal} className="icon" />
                </Modal.Header>
                <div className="modal__fragment">
                    <input type="text" placeholder="Search For Product" className="input__default input--border" ref={buttonSearchRef} onChange={handleSearch} />
                </div>
                <Modal.Body>
                    <div className="body__result">
                        {
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
                        }
                    </div>
                </Modal.Body>
            </HeaderModal>
            {/*========== HeaderModal ==========*/}
        </div>
    )
}

export default UserSearch