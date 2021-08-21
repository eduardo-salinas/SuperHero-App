import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, FormGroup, FormLabel } from 'react-bootstrap';
import { logIn } from '../../redux/actions';

const LogIn = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email required'),
        password: Yup.string().required('Password required')
    });

    const handleSubmit = async (value, { resetForm }) => {
        await dispatch(logIn(value));
        console.log(value);
        store.user.error && alert(store.user.error)
        store.user.token && alert("ok")
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
                            <p>Log in with your account to start using the app</p><br /><br /><br />
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
                                <Button variant='warning' type='submit' disabled={errors.email || errors.password}>Submit</Button>
                            </Form>
                        </div>
                    )
                }
            }
        </Formik >

    )
};

export default LogIn;