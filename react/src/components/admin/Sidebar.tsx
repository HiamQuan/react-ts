import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => { 
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light tw-bg-indigo-200">
            <div className="d-flex flex-column">
                <NavLink className="navbar-brand" to="/admin">HiamCoder</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex flex-column">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/admin">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/inbox">Inbox</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/products">Users</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/admin/products" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}


export default Sidebar
