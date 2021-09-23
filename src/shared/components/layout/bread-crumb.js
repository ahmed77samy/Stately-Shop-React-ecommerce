import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import "./styles/bread-crumb.scss"

function BreadCrumb (props) {
    const { el } = props
    // map for el to create Breadcrumb items
    const itemList = el?.map((item , index) => {
        const { content, route, icon, props } = item
        return(
            <Breadcrumb.Item key={index} {...props} linkAs={Link} linkProps={{to:`${route}`, className: "anchors--reset"}} className="text-capitalize">
                {icon && <item.icon className="mr-2" />} {content}
            </Breadcrumb.Item>
        )
    })

    /**
     * {@inheritdoc}
     */
    return (
        <div className="bread__crumb">
            <Container>
                <Breadcrumb>
                    {itemList}
                </Breadcrumb>
            </Container>
        </div>
    )
}

BreadCrumb.propTypes = {
    el: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        icon: PropTypes.func,
        props: PropTypes.object,
    })).isRequired
}

export default BreadCrumb