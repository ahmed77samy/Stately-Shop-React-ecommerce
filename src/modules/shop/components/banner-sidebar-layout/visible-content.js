import { NavigateTo } from "core/route-service"
import { useEffect, useRef } from "react"
import { GridIcon, ListIcon, SearchIcon } from "shared/components/elements/icons"

function VisibleContent (props) {
    const searchRef = useRef(0)
    const gridRef = useRef(0)
    const listRef = useRef(0)

    /**
     * navigate to page search
     * @param {event} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        let value = e.target.search.value
        NavigateTo(`/shop/banner-sidebar/${value}`)
    }

    /**
     * send the given sort to prev component
     * @param {event} e 
     */
    const handleSort = (e) => {
        let value = e.target.value
        props.onSort(value)
    }
    
    /**
     * send the given sort to prev component
     * @param {event} e 
     */
    const handleVisible = (e) => {
        gridRef.current.classList.remove("active")
        listRef.current.classList.remove("active")
        e.target.classList.add("active")
        let value = e.target.value
        props.onVisible(value)
    }

    // set the key_search to value searchRef if existing
    useEffect(() => {
        if(props.key_search) {
            searchRef.current.value = props.key_search
        }
    },[props.key_search])

    /**
     * {@inheritdoc}
     */
    return (
        <div className="visible__content">
            {/*========== sort ==========*/}
            <div className="sort">
                <div className="box">
                    <select id="banner-side-sort-select" onChange={handleSort}>
                        <option value="newest">sort by newest</option>
                        <option value="oldest">sort by oldest</option>
                        <option value="rate_highest">Sort by highest rating</option>
                        <option value="rate_lowest">Sort by lowest rating</option>
                        <option value="price_highest">sort by highest price</option>
                        <option value="price_lowest">sort by lowest price</option>
                    </select>
                </div>
            </div>
            {/*========== sort ==========*/}
            {/*========== search ==========*/}
            <form className="search" onSubmit={handleSubmit}>
                <input type="search" className="input__default input--border" name="search" placeholder="search for products" ref={searchRef} />
                <button type="submit" className="btn__default btn--primary"><SearchIcon /></button>
            </form>
            {/*========== search ==========*/}
            {/*========== visible ==========*/}
            <div className="visible">
                <button className="btn--reset btn__icon btn--primary btn--border" value="list" ref={listRef} onClick={handleVisible}>
                    <ListIcon className="icon" />
                </button>
                <button className="btn--reset btn__icon btn--primary btn--border active" value="grid" ref={gridRef} onClick={handleVisible}>
                    <GridIcon className="icon" />
                </button>
            </div>
            {/*========== visible ==========*/}
        </div>
    )
}

export default VisibleContent