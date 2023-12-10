import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "components/shared/styles/header.css"

export default function Header() {
    const [hamburger, setHamburger] = useState(false)
    return (
        <header>
            <div className="header-wrapper section-margin">
                <div className="logo" onClick={() => setHamburger(false)}>
                    <NavLink to={"/"}>Lessek Contractors</NavLink>
                </div>

                <nav className={`nav-links-wrapper ${hamburger ? "active" : null}`}>
                    <ul className="nav-links">
                        <li className='nav-link-wrapper' onClick={() => setHamburger(!hamburger)}>
                            <NavLink to={"/"} className={"nav-link"}>Home</NavLink>
                        </li>
                        <li className='nav-link-wrapper' onClick={() => setHamburger(!hamburger)}>
                            <NavLink to={"/about"} className={"nav-link"}>About</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={`hamburger ${hamburger ? "active" : null}`} onClick={() => setHamburger(!hamburger)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </header>
    )
}