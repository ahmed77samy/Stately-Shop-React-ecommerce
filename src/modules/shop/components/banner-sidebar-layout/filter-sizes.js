import { Form } from "react-bootstrap"

function FilterSizes () {

    /**
     * toggle active class from li
     * @param {event} e 
     */
    const handleChange = (e) => {
        e.target.closest("li").classList.toggle("active")
    }

    /**
     * {@inheritdoc}
     */
    return(
        <ul className="m-0 list-unstyled sizes">
            <li>
                <Form.Check type="checkbox" label="extra large" id={`banner-side-filter-sizes-xl-${Math.random()}`} onChange={handleChange} />
            </li>
            <div className="bg--neutral--100 hr--1" />
            <li>
                <Form.Check type="checkbox" label="large" id={`banner-side-filter-sizes-lg-${Math.random()}`} onChange={handleChange} />
            </li>
            <div className="bg--neutral--100 hr--1" />
            <li>
                <Form.Check type="checkbox" label="meduim" id={`banner-side-filter-sizes-md-${Math.random()}`} onChange={handleChange} />
            </li>
            <div className="bg--neutral--100 hr--1" />
            <li>
                <Form.Check type="checkbox" label="small" id={`banner-side-filter-sizes-sm-${Math.random()}`} onChange={handleChange} />
            </li>
            <div className="bg--neutral--100 hr--1" />
            <li>
                <Form.Check type="checkbox" label="extra small" id={`banner-side-filter-sizes-xs-${Math.random()}`} onChange={handleChange} />
            </li>
        </ul>
    )
}

export default FilterSizes