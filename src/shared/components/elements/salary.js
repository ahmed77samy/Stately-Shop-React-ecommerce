import Proptypes from "prop-types"
import "./styles/salary.scss"

function Salary(props) {
    const { sale , salary , className } = props
    return(
        <div className={`wrapper__salary ${className}`}>
            {sale?.sale && <span className="font--header sale">{sale?.sale}.00$</span>}
            <span className={`font--header salary ${sale?.sale && "salary--sale"}`}>{salary}.00$</span>
        </div>
    )
}

Salary.propTypes = {
    sale: Proptypes.object,
    salary: Proptypes.number.isRequired,
    className: Proptypes.string
}

export default Salary