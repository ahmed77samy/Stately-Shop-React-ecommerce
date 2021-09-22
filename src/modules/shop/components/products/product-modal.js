import BadgeFiveStars from "shared/components/badges/badge-fivestars"
import { Times } from "shared/components/elements/icons"
import ItemContent from "shared/components/layout/item-content"
import Modal from "shared/components/layout/modal"


function ProductModal (props) {
    let { isOpen, toggle , item } = props
    return (
        <Modal classes="quickview__modal" isOpen={isOpen} toggle={toggle}>
            <div className="row no-gutters">
                <div className="col-6">
                    <img src={item.photo} alt="product"></img>
                </div>
                <div className="col-6">
                    <div className="quickview__modal__content">

                        <div className="modal__header">
                            <Times className="icon" onClick={toggle} />
                        </div>

                        <div className="modal__body">
                            <ItemContent classes="py-0 px-4 align-items-start text-left">
                                <h6 className="text-capitalize">{item.name}</h6>
                                <div className="d-flex align-self-stretch justify-content-between">
                                    <div className="wrapper__salary mr-3">
                                        {item.sale?.sale && <span className="font--header sale">{item.sale?.sale}.00$</span>}
                                        <span className={`font--header salary ${item.sale?.sale && "salary--sale"}`}>{item.salary}.00$</span>
                                    </div>
                                    <BadgeFiveStars stars={item.rating} />
                                </div>
                                <p>{item.description}</p>
                            </ItemContent>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ProductModal