import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <section className="navbar_section_main_wrapper">
        <div className="container p-0">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggle}
              aria-controls="navbarSupportedContent"
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/" onClick={handleToggle}>HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus" onClick={handleToggle}>ABOUT US</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services" onClick={handleToggle}>OUR SERVICE</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ourteam" onClick={handleToggle}>OUR TEAM</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog" onClick={handleToggle}>BLOG</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop" onClick={handleToggle}>SHOP</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/buydogs" onClick={handleToggle}>BUY DOGS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus" onClick={handleToggle}>CONTACT US</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default Navbar;
