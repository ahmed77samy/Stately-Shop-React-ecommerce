import photo1 from "assets/images/product/options.png"
import MyForm from "shared/components/elements/form"
import FormActions from "./form-actions"
import FormColors from "./form-colors"
import FormSizes from "./form-sizes"

function ProductViewForm () {

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <MyForm onSubmit={handleSubmit} initialValues={{size: "", color: "", quantity: ""}}>
            <FormSizes />
            <FormColors />
            <FormActions />
            <img src={photo1} alt="sponser" className="my-3 img-fluid"  />
        </MyForm>
    )
}

export default ProductViewForm