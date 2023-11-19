import React from 'react';
import './navbar.css';
import logo from '../../assets/logo-navbar.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="menu-navbar">
        <img src={logo} alt="Logo" className='logo-navbar'/>
      </Link>
      <div className="menu">
        <Link to="/" className="menu-navbar">Home</Link>
        <Link to="/about" className="menu-navbar">About</Link>
        <Link to="/galery" className="menu-navbar">Galery</Link>
        <Link to="/contact" className="menu-navbar">Contact</Link>
      </div>
      <Link to='/contact' className="kontak-link">
        <button className="kontak-button">Hubungi saya</button>
      </Link>
    </nav>
  )
}

export default Navbar;
