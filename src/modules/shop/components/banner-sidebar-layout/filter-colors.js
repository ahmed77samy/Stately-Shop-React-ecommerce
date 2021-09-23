import { Form } from "react-bootstrap"

function FilterColors () {

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
        <ul className="m-0 list-unstyled colors">
            <li id="li">
                <Form.Check type="checkbox" label="white" id={`banner-side-filter-colors-white-${Math.random()}`} onChange={handleChange} />
            </li>
            <div className="bg--neutral--100 hr--1" />
            <li>
                <Form.Check type="checkbox" label="black" id={`banner-side-filter-colors-black-${Math.random()}`} onChange={handleChange} />
            </li>
            <div className="bg--neutral--100 hr--1" />
            <li>
                <Form.Check type="checkbox" label="blue" id={`banner-side-filter-colors-blue-${Math.random()}`} onChange={handleChange} />
            </li>
            <div className="bg--neutral--100 hr--1" />
            <li>
                <Form.Check type="checkbox" label="green" id={`banner-side-filter-colors-green-${Math.random()}`} onChange={handleChange} />
            </li>
        </ul>
    )
}

export default FilterColors