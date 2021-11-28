import { Form } from "react-bootstrap";
import PropTypes from "prop-types"
import ShopApi from "../../services/api"
import { useEffect, useState, useRef } from "react";
import BorderLoading from "shared/components/elements/border-loading";

function FormColors (props) {
    const { propsformik, item } = props
    const [default_color , setDefault_color] = useState(null)
    const [colors , setColors] = useState(null)
    const colorRef = useRef(0)

    // reset color if isSubmitting
    useEffect(() => {
        if(propsformik.isSubmitting) {
            setTimeout(() => {
                colorRef.current?.querySelector("#product-single-form-color-default")?.click()
            });
        }
    },[propsformik.isSubmitting])

    // fetch defaut color from ShopApi
    useEffect(() => {
        let isMounted = true
        setDefault_color(null)
        ShopApi.showDefaultColor(item.defaultColor_id)
        .then(data => {
            if(isMounted) {
                setDefault_color(data.data.payload);
                propsformik.setFieldValue("color_id", JSON.stringify(data.data.payload))
                props.onreset(data.data.payload)
            }
        })
        .catch(() => {
            if(isMounted) {
                setDefault_color(undefined);
            }
        })

        return () => isMounted = false;
    },[item.id])// eslint-disable-line react-hooks/exhaustive-deps

    // fetch colors from ShopApi
    useEffect(() => {
        let isMounted = true;
        setColors(null)
        ShopApi.showColors(item.product_id || item.id)
        .then(data => {
            if(isMounted){
                if(data.data.payload.length > 0) {
                    let arrcolors = []
                    data.data.payload.forEach((item , index) => {
                        ShopApi.showDefaultColor(item.color_id)
                        .then((data2) => {
                            if(isMounted) {
                                arrcolors.push(data2.data.payload)
                                index === data.data.payload.length - 1 && setColors(colors => [].concat(arrcolors)) ;
                            }
                        })
                    })
                } else {
                    setColors(data.data.payload)
                }
            }
        })
        .catch(() => {
            if(isMounted){
                setColors([]);
            }
        })

        return () => isMounted = false;
    },[item.id])// eslint-disable-line react-hooks/exhaustive-deps

    /**
     * {@inheritdoc}
     */
    return(
        <div className="colors" ref={colorRef}>
            {
                default_color && colors ? 
                <Form.Group>
                    <label>color:&nbsp;&nbsp;
                        <span className="text--primary--500">{JSON.parse(propsformik.values.color_id).pro_color}</span>
                    </label>
                    {
                        propsformik.touched.color_id && propsformik.errors?.color_id && 
                        <span className="text-danger text-capitalize filed__error">&nbsp;&nbsp;&nbsp;{propsformik.errors?.color_id}</span>
                    }
                    {/*========== default_color ==========*/}
                    <Form.Check id="product-single-form-color-default">
                        <Form.Check.Input type='radio' value={JSON.stringify(default_color)} name="color_id" onChange={propsformik.handleChange} role="button" defaultChecked />
                        <Form.Check.Label role="button" style={{background: `${default_color.pro_color}`}} />
                    </Form.Check>
                    {/*========== default_color ==========*/}
                    {/*========== colors ==========*/}
                    {
                        colors.map((item , index) => {
                            return (
                                <Form.Check id={`product-single-form-color-pink ${index}`} key={index}>
                                    <Form.Check.Input type='radio' value={JSON.stringify(item)} name="color_id" onChange={propsformik.handleChange} role="button" />
                                    <Form.Check.Label role="button" style={{background: `${item.pro_color}`}} />
                                </Form.Check>
                            )
                        })
                    }
                    {/*========== colors ==========*/}
                </Form.Group>
                :
                <BorderLoading />
            }
        </div>
    )
}

FormColors.propTypes = {
    item: PropTypes.object.isRequired
}

export default FormColors