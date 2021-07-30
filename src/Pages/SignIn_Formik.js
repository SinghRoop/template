import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignInFormik = () => {

    const forrmik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({

            email: Yup.string()
                .required("Sorry this is required").email("Needs to be an correct email"),

            password: Yup.string()
                .required("Sorry this is required")
                .max(8, "Sorry your password is too Long")
                .min(5, "Your password is Too short")
        }),

        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <div className="login">
                <div className="login_title">
                    <h1>Sign In</h1>
                </div>
                <div className="login_container">
                    <form onSubmit={forrmik.handleSubmit}>
                        <label className="form_label">Email</label>
                        <input
                            placeholder="Enter your email"
                            type="text"
                            name="email"
                            value={forrmik.values.email}
                            onChange={forrmik.handleChange}
                            onBlur={forrmik.handleBlur}
                        />

                        {forrmik.errors.email && forrmik.touched.email ? (
                            <span> {forrmik.errors.email} </span>
                        ) : null}

                        <label className="form_label">Password</label>
                        <input
                            placeholder="Enter Your password"
                            type="password"
                            name="password"
                            value={forrmik.values.password}
                            onChange={forrmik.handleChange}
                            onBlur={forrmik.handleBlur}
                        />
                        {forrmik.errors.password && forrmik.touched.password ? (
                            <span> {forrmik.errors.password} </span>
                        ) : null}

                        <button type="submit" className="login_submit_btn">Login</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default SignInFormik;
