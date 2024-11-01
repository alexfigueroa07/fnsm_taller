import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'


function Navbar() {
    return (
        <nav className="navbar">

            <h1 className="navbar-logo">???</h1>
            <ul className="navbar-links">
                <li >
                    <Link to="/">???</Link>
                </li>
                <li >
                    <Link to="/HomePublic">???</Link>
                </li>
                <li >
                    <Link to="/Dashboard">???</Link>
                </li>

            </ul>
        </nav>
    );
}
export default Navbar;
