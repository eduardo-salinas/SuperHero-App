import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, FormGroup, FormLabel } from 'react-bootstrap';

const Login = () => {

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email required'),
        password: Yup.string().required('Password required')
    });

    const handleSubmit = (value, { resetForm }) => {
        console.log("data", value);
        resetForm(initialValues);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                ({ errors, touched }) => {
                    return (
                        <div className="login">
                            <p>Log in with your account to start using the app</p><br/><br/><br/>
                            <Form>
                                <FormGroup className="mb-3" controlId="formBasicEmail">
                                    <FormLabel>Email address</FormLabel>
                                    <Field
                                        id='email'
                                        type='email'
                                        name='email'
                                        placeholder='email' />
                                    {errors.email && touched.email ? (
                                        <Alert variant='danger'>
                                            {errors.email}
                                        </Alert>
                                    ) : null}
                                </FormGroup>
                                <FormGroup className="mb-3" controlId="formBasicPassword">
                                    <FormLabel>Password</FormLabel>
                                    <Field
                                        id='password'
                                        type='password'
                                        name='password'
                                        placeholder='password' />
                                    {errors.password && touched.password ? (
                                        <Alert variant='danger'>
                                            {errors.password}
                                        </Alert>
                                    ) : null}
                                </FormGroup>
                                <Button variant='danger' type='submit' disabled={errors.email || errors.password}>Submit</Button>
                            </Form>
                        </div>
                    )
                }
            }
        </Formik >

    )
};

export default Login;