import React, { useState } from 'react'
import logo from '../../assets/iiits logo.png'
import "./Navbar.css"

export default function Navbar() {

    const [expand, setExpand] = useState(false)

    const NavToggle = () => {
        setExpand(!expand)
    }

    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 70;
            const targetPosition = targetElement.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <nav>
                <div className="mobview">
                    <h1><img src={logo} alt="iiits" /> CyberTea</h1>
                    <span id='hamburger' className={`material-symbols-outlined ${expand ? `expand` : ``}`} onClick={NavToggle} >
                        menu
                    </span>
                </div>
                <ul id='nav-right' className={expand ? `expand` : ``}>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}><a href="#about" onClick={scrollToSection}>About</a></li>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}><a href="#speakers" onClick={scrollToSection}>Speakers</a></li>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}><a href="#news" onClick={scrollToSection}>News</a></li>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}> <a href="#schedule" onClick={scrollToSection}>Schedule</a></li>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}><a href="#registration" onClick={scrollToSection}>Register</a></li>
                </ul>
            </nav>
            <div className="cover-nav-space"></div>
        </>
    )
}
