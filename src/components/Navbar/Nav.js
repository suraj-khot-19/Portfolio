import React from 'react'
import logo from '../../assets/logo.png'
import './Nav.css'
export default function Nav() {
    return (
        <>

            {/* navbar */}
            <div className="top-nav-box">
                <nav className="top-nav d-flex justify-content-between align-items-center">
                    {/* logo */}
                    <a href="/"> <img src={logo} alt="logo" /></a>
                    {/* list */}
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Client</li>
                    </ul>
                    {/* btn */}
                    <button className="btn btn-outline-light btn-sm"><i className="fa-regular fa-comment-dots fa-beat-fade me-2"></i>Contact Me</button>
                </nav>
            </div>
        </>
    )
}
