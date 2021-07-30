import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to="/" className="navbar_logo">
                        <h2>LOGO</h2>
                    </Link>
                </div>
                <ul className="navbar_menu">
                    <li className="navbar_items">
                        <Link to="/" className="navbar_links">
                            Home
                        </Link>
                    </li>
                    <li className="navbar_items">
                        <Link to="/sign-up" className="navbar_links">
                            Sign Up
                        </Link>
                    </li>
                    <li className="navbar_items">
                        <Link to="/sign-in" className="navbar_links">
                            Sign In
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
