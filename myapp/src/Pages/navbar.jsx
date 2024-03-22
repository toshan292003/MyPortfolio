import React from "react";
import './navbar.css';
export default function Navbar(){
    return (
        <>
            <div className="navbar">
                <section>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/experience">Experience</a></li>
                    </ul>
                </section>
            </div>
        </>
    )
}