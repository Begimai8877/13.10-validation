import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
        .matches(/^[aA-zZ]+$/, "Forbidden symbol"),
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
        .min(5, 'Too Short!')
        .max(15, 'Too Long!'),
    password: Yup.string()
        .required('Required')
        .min(5, 'Too Short!')
        .max(15, 'Too Long!')
        .matches(/^[aA-zZ0-9.-_--]+$/, "Forbidden symbol"),
});


const Modal = ({ setInfo }) => {
    return (

        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col ">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 relative">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <i className="fa-solid fa-xmark absolute top-10 right-10 " onClick={() => setInfo(false)}></i>
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                        <Formik
                            initialValues={{
                                fullName: '',
                                email: '',
                                password: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {

                                console.log(values);
                            }}
                        >
                            {({ errors, touched, values, handleChange }) => (
                                <Form>
                                    <div className='relative'>
                                        <input
                                            type="text"
                                            className= {`block border border-grey-light w-full p-3 rounded mb-6   ${errors.fullName && touched.fullName ? "border border-red-500": ""}`}
                                            name="fullName"
                                            placeholder="Full Name"
                                            onChange={handleChange}
                                        />

                                        {errors.fullName && touched.fullName ? (
                                            <div className='modal__error'>{errors.fullName}</div>
                                        ) : null}
                                    </div>

                                    <div className='relative'>
                                        <input
                                            type="text"
                                            className= {`block border border-grey-light w-full p-3 rounded mb-6   ${errors.fullName && touched.fullName ? "border border-red-500": ""}`}
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                        />

                                        {errors.email && touched.email ? (
                                            <div className="modal__error">{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className='relative'>
                                        <input
                                            type="password"
                                            className= {`block border border-grey-light w-full p-3 rounded mb-6   ${errors.fullName && touched.fullName ? "border border-red-500": "" }`}
                                            name="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                        />
                                            {errors.password && touched.password ? (
                                            <div className='modal__error'>{errors.password}</div>
                                        ) : null}
                                    </div>

                                    <button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                                    >Create Account</button>

                                </Form>
                            )}
                        </Formik>


                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <a className="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
