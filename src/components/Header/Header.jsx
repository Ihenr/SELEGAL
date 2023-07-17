import React, { useState, useEffect } from 'react';
import logo from '../../assets/imgs/logo2.svg';
import './Header.css';
import BurguerButton from '../BurguerButton/BurguerButton';

const Header = () => {
  const [clicked, setClicked] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 952);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 952);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={isMobile ? 'mobile' : ''}>
      <nav className={`menu ${isMobile && clicked ? 'show' : ''}`}>
        <div className="logo">
          <img src={logo} alt="logo selegal"></img>
        </div>
        <div className={`lists ${clicked ? 'show' : ''}`}>
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Equipo</a>
          <a href="#">Acerca de</a>
          <a href="#">Contactos</a>
          <a href="#">Ubicacion</a>
        </div>
        <div className="burguer" onClick={handleClick}>
          <BurguerButton clicked={clicked} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
