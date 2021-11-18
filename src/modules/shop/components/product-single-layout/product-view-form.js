import photo1 from "assets/images/product/options.png"
import shop from "modules/shop/shop"
import MyForm from "shared/components/elements/form"
import FormActions from "./form-actions"
import FormColors from "./form-colors"
import FormSizes from "./form-sizes"
import { NavigateTo, store } from "core/route-service"
import * as Yup from "yup"
import { useState } from "react"
import ShopApi from "../../services/api"
import users from "modules/users/users"

function ProductViewForm (props) {
    // schema validation with yup shape
    let CartSchema = Yup.object().shape(shop.CartSchema)
    const [waitreq , setWaitreq] = useState(false)
    const [defaultsize , setDefaultSize] = useState({})
    const [defaultcolor , setDefaultColor] = useState({})
    let loggedIn = users.isLoggedIn();

    /**
     * handle submit form product add ro cart
     * check user is login or now
     * @param {object} values 
     * @param {object} actions 
     */
    const handleSubmit = (values,actions) => {
        if(loggedIn) {
            setWaitreq(true)
            let token = store.getState().userReducer.user.access_token;
            let f_values = {
                ...values,
                color_id: JSON.parse(values.color_id).id,
                size_id: JSON.parse(values.size_id).id,
                product_id: props.item.id
            }
            ShopApi.addToCart(f_values, token)
            .then((data) => {
                setWaitreq(false)
                shop.addToCart(data.data.payload)
                actions.resetForm({values: {size_id: defaultsize, color_id: defaultcolor, quantity: 0}})
                document.querySelector("header .user__cart .icon").click()
            })
            .catch(({response}) => {
                setWaitreq(false)
            })
        } else {
            NavigateTo("/user/account")
        }
    }

    /**
     * reset the size value 
     * @param {object} e 
     */
    const resetSize = (e) => {
        setDefaultSize(JSON.stringify(e))
    }

    /**
     * reset the color value 
     * @param {object} e 
     */
    const resetColor = (e) => {
        setDefaultColor(JSON.stringify(e))
    }

    return (
        <MyForm onSubmit={handleSubmit} initialValues={{size_id: "", color_id: "", quantity: 0}} validationSchema={CartSchema}>
            <FormSizes item={props.item} onreset={resetSize} />
            <FormColors item={props.item} onreset={resetColor} />
            <FormActions item={props.item} waitreq={waitreq} />
            <img src={photo1} alt="sponser" className="my-3 img-fluid"  />
        </MyForm>
    )
}

export default ProductViewForm