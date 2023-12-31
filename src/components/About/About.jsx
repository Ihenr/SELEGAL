import React from 'react';
import img from '../../assets/imgs/Logo2.png';
import './About.css';
const About = () => {
  return (
    <section className="section ">
      <div className="intro">
        <div className="i-left">
          <div className="contenedor_texto">
            <h1>Asesorías legales</h1>
            <p>
              Conoce nuestras asesorías legales y ve nuestros servicios completos y
              encuentra cual es el que necesitas.
            </p>
            <a
              target="_blank"
              href="https://wa.me/593985570349"
              className="button i-button"
              rel="noopener noreferrer"
            >
              Asesoría
            </a>
          </div>
        </div>
        <div className="i-right">
          <div className="right-cont">
            <div className="right__img">
              <img src={img} alt="SELEGAL"></img>
            </div>
            <div className="content">
              <div>
                <h2>Asesoría Legal</h2>
              </div>
            </div>
          </div>
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="M0,96L60,90.7C120,85,240,75,360,58.7C480,43,600,21,720,37.3C840,53,960,107,1080,133.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
