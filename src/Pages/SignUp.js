import React from "react";
import { useState } from "react";

const SignUp = () => {
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value })
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        alert(`Sign Up Successfully ${signupData.firstName}  ${signupData.lastName} ${signupData.password} ${signupData.confirmPassword} `);
    };


    return (
        <>
            <div className="signup">
                <div className="signup_title">
                    <h1>Sign Up</h1>
                </div>

                <div className="signup_container">
                    <form onSubmit={handleSignupSubmit}>
                        <label className="form_label">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            name="firstName"
                            value={signupData.firstName}
                            onChange={handleChange}
                        />
                        <label className="form_label">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            name="lastName"
                            value={signupData.lastName}
                            onChange={handleChange}
                        />
                        <label className="form_label">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            value={signupData.password}
                            onChange={handleChange}
                        />
                        <label className="form_label">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={signupData.confirmPassword}
                            onChange={handleChange}
                        />
                        <div className="signup_terms">

                            <input type="checkbox" />{" "}
                            <p className="signup_terms_text">
                                I accept the{" "}
                                <span className="signup_terms_highlight"> Terms of Use </span> &{" "}
                                <span className="signup_terms_highlight"> Privacy Policy </span>
                            </p>
                        </div>
                        <button className="signup_submit_btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
