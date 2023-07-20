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

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setClicked(true); // Cerrar el menú de navegación en dispositivos móviles después de hacer clic
  };

  return (
    <header className={isMobile ? 'mobile' : ''}>
      <nav className={`menu ${isMobile && clicked ? 'show' : ''}`}>
        <div className="logo">
          <img src={logo} alt="logo selegal"></img>
        </div>
        <div className={`lists ${clicked ? 'show' : ''}`}>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
            Inicio
          </a>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>
            Servicios
          </a>
          <a href="#team" onClick={(e) => handleLinkClick(e, 'team')}>
            Equipo
          </a>
          <a href="#content" onClick={(e) => handleLinkClick(e, 'content')}>
            Acerca de
          </a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
            Contactos
          </a>
          <a href="#location" onClick={(e) => handleLinkClick(e, 'location')}>
            Ubicacion
          </a>
        </div>
        <div className="burguer" onClick={handleClick}>
          <BurguerButton clicked={clicked} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
