import React, { useState } from 'react'
import logo from '../../assets/iiits logo.png'
import "./Navbar.css"

export default function Navbar() {

    const [expand, setExpand] = useState(false)

    const NavToggle = () => {
        setExpand(!expand)
    }

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
                    }}>About</li>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}>Speakers</li>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}>News</li>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}>Schedule</li>
                    <li onClick={() => {
                        expand ? NavToggle() : ``
                    }}>Register</li>
                </ul>
            </nav>
            <div className="cover-nav-space"></div>
        </>
    )
}
