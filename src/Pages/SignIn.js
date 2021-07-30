import React from "react";
import { useState } from "react";

    const SignIn = () => {
        
    const [loginData, setLogindata] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        // setLogindata({ [e.target.name]: e.target.value });
        const{name, value} = e.target;
        setLogindata({...loginData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Login Successfully ${loginData.email} ${loginData.password} `);
    };
    
    return (
        <>
                    <div className="login">
                        <div className="login_title">
                        <h1>Sign In</h1>
                        </div>
                        <div className="login_container">
                        <form onSubmit={handleSubmit}>
                            <label className="form_label">Email</label>
                            <input
                            placeholder="Enter your email"
                            type="text"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            />
                            <label className="form_label">Password</label>
                            <input
                            placeholder="Enter Your password"
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            />
                            <button className="login_submit_btn">Login</button>
                        </form>
                        </div>
                    </div>
        </>
    );
    };

export default SignIn;
