import { Formik , Form } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

function MyForm (props) {
    const { children } = props

    /**
     * default action submit if is not defined
     * @param {object} values 
     */
    const handleSubmit = (values) => {
        console.log(values);
    }

    /**
     * Checking isValidElement is the safe way and error too.
     * return child with props
     * @param {object} propsformik 
     * @returns {React.Component}
     */
    const ChildrenWithProps = (propsformik) => {
        const childrenWithProps = React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { propsformik });
            }
            return child;
        });
        return (
            <Form noValidate className={props.className} id={props.id}>
                {childrenWithProps}
            </Form>
        )
    }

    /**
     * {@inheritdoc}
     */
    return(
        <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            {...props}
        >
            {ChildrenWithProps}
        </Formik>
    )
}

MyForm.propTypes = {
    children: PropTypes.node,
}

export default MyForm