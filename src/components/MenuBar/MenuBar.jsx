import React from 'react'
import "./MenuBar.css"
import { assets } from '../../assets/assets';

const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <a className="navbar-brand" href="#">
        <img src={assets.logo} alt="Logo" height="40" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">DASHBOARD</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">EXPLOR</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">MANAGE ITEMS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">MANAGE CATEGORIES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">MANAGE USERS</a>
          </li>
        </ul>
        add dropdown for user profiles
      </div>
    </nav>
  )
}

export default MenuBar;