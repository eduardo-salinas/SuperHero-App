import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, FormGroup, FormLabel } from 'react-bootstrap';
import { logIn } from '../../redux/actions';
import { useEffect } from 'react';
import swal from 'sweetalert';

const LogIn = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        if (window.localStorage.superHero || store.user.loged === "on") {
            swal({
                text: "Correct!",
                icon: "success",
            });
        };
        if (store.user.error) {
            swal({
                title: "I'm sorry",
                text: store.user.error,
                icon: "warning",
                dangerMode: true,
            });
        };
    }, [store.user])

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email required'),
        password: Yup.string().required('Password required')
    });

    const handleSubmit = (value, { resetForm }) => {
        dispatch(logIn(value));
        resetForm();
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