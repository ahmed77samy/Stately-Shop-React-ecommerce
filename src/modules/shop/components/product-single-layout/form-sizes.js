import { Form } from "react-bootstrap";
import PropTypes from "prop-types"
import { useEffect, useState, useRef } from "react";
import ShopApi from "../../services/api"
import BorderLoading from "shared/components/elements/border-loading";

function FormSizes (props) {
    const { propsformik, item } = props
    const [default_size, setDefault_size] = useState(null)
    const [sizes , setSizes] = useState(null)
    const sizeRef = useRef(0)

    // reset size if isSubmitting
    useEffect(() => {
        if(propsformik.isSubmitting) {
            setTimeout(() => {
                sizeRef.current?.querySelector("#product-single-form-size-default")?.click()
            });
        }
    },[propsformik.isSubmitting])

    // fetch defaut size from ShopApi
    useEffect(() => {
        let isMounted = true
        setDefault_size(null)
        ShopApi.showDefaultSize(item.defaultSize_id)
        .then(data => {
            if(isMounted) {
                setDefault_size(data.data.payload);
                propsformik.setFieldValue("size_id",JSON.stringify(data.data.payload))
                props.onreset(data.data.payload)
            }
        })
        .catch(() => {
            if(isMounted) {
                setDefault_size(undefined);
            }
        })
        return () => isMounted = false;
    },[item.id])// eslint-disable-line react-hooks/exhaustive-deps

    // fetch sizes from ShopApi
    useEffect(() => {
        let isMounted = true;
        setSizes(null)
        ShopApi.showSizes(item.product_id || item.id)
        .then(data => {
            if(isMounted){
                if(data.data.payload.length > 0) {
                    let arrsizes = []
                    data.data.payload.forEach((item , index) => {
                        ShopApi.showDefaultSize(item.size_id)
                        .then((data2) => {
                            if(isMounted) {
                                arrsizes.push(data2.data.payload)
                                index === data.data.payload.length - 1 && setSizes(sizes => [].concat(arrsizes)) ;
                            }
                        })
                    })
                } else {
                    setSizes(data.data.payload)
                }
            }
        })
        .catch(() => {
            if(isMounted){
                setSizes([]);
            }
        })

        return () => isMounted = false;
    },[item.id])// eslint-disable-line react-hooks/exhaustive-deps

    /**
     * {@inheritdoc}
     */
    return(
        <div className="sizes" ref={sizeRef}>
            {
                default_size && sizes ? 
                <Form.Group>
                    <label>size:&nbsp;&nbsp;
                        <span className="text--primary--500"> {JSON.parse(propsformik.values.size_id).pro_size}</span>
                    </label>
                    {
                        propsformik.touched.size_id && propsformik.errors?.size_id && 
                        <span className="text-danger text-capitalize filed__error">&nbsp;&nbsp;&nbsp;{propsformik.errors?.size_id}</span>
                    }
                    {/*========== default_size ==========*/}
                    <Form.Check id="product-single-form-size-default">
                        <Form.Check.Input type='radio' value={JSON.stringify(default_size)} name="size_id" onChange={propsformik.handleChange} role="button" defaultChecked />
                        <Form.Check.Label role="button">{default_size.pro_size}</Form.Check.Label>
                    </Form.Check>
                    {/*========== default_size ==========*/}
                    {/*========== sizes ==========*/}
                    {
                        sizes.map((item , index) => {
                            return (
                                <Form.Check id={`product-single-form-size-${index}`} key={index}>
                                    <Form.Check.Input type='radio' value={JSON.stringify(item)} name="size_id" onChange={propsformik.handleChange} role="button" />
                                    <Form.Check.Label role="button">{item.pro_size}</Form.Check.Label>
                                </Form.Check>
                            )
                        })
                    }
                    {/*========== sizes ==========*/}
                </Form.Group>
                :
                <BorderLoading />
            }
        </div>
    )
}

FormSizes.propTypes = {
    item: PropTypes.object.isRequired
}

export default FormSizes