import ConfigService from 'core/config-service';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import "./styles/cart-alert.scss"

function CartAlert (props) {
    const {status} = props
    const {pro_name , mainImage} = props.item
    const main_root = ConfigService.config.get("endpoints.url")
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(status) {
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 40000000);
        }
    },[status])

    const handleClick = () => setShow(false)

    return (
        <Alert show={show} variant="success" className="cart__alert" {...props}>
            <Alert.Heading as="h6">{pro_name}</Alert.Heading>
            
            <img src={`${main_root}/${mainImage}`} alt="product" />

            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={handleClick} variant="outline-success">ok</Button>
            </div>
        </Alert>
    );
}

export default CartAlert