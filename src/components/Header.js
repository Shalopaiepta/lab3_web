import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__logo">
            <span className="nav__logo-text">CodeSchool</span>
          </Link>
          <div className="nav__menu">
            <Link to="/" className="nav__link">Главная</Link>
            <Link to="/services" className="nav__link">Курсы</Link>
            <Link to="/contact" className="nav__link">Заявка</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;