import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () =>
{
    return  (
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand text-white text-lg brand-text" to="/">Seos Movies & Series</Link>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                        </li>
                    </ul>
                </div>
            </nav>
            )
}

export default Navbar

