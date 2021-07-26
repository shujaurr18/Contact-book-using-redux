import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
       <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark  bg-primary">
<div className="container">
    <Link className="navbar-brand" to="/"> Contact Book</Link>
    <div>
        <Link className="btn btn-light navbar-brand ml-auto" to="/contacts/add">Create Contact</Link>
    </div>
</div>
       </nav>
    )
}

export default Navbar

