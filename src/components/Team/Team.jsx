import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center py-16 team">
      <h2 className=" text-5xl uppercase  font-bold font-['Krub', sans-serif]">
        Nuestro Equipo
      </h2>
      <div className="w-full flex flex-wrap gap-10 text-2xl  p-5  justify-evenly items-center carousel__slider">
        <a
          href="https://wa.me/593985570349"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:scale-105 hover:shadow-2xl p-5 rounded-2xl"
        >
          <div className="text-center carousel__item">
            <h3 className="font-bold text-3xl font-['Krub', sans-serif] py-3">
              Edgar Javier Morocho Guaman
            </h3>
            <p className=" font-['Montserrat','sans-serif'] text-[#212121]">
              +593 98 557 0349
            </p>
            <p className=" font-['Montserrat','sans-serif'] text-[#212121]">
              edgar.javier10@gmail.com
            </p>
          </div>
        </a>

        <a
          href="https://wa.me/593961128914"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:scale-105 hover:shadow-2xl p-5 rounded-2xl"
        >
          <div className="text-center carousel__item">
            <h3 className="font-bold text-3xl font-['Krub', sans-serif] py-3">
              Cristian Stalin Martínez Zúñiga
            </h3>
            <p className=" font-['Montserrat','sans-serif'] text-[#212121]">
              +593 96 112 8914
            </p>
            <p className=" font-['Montserrat','sans-serif'] text-[#212121]">
              martinezcristian569@gmail.com
            </p>
          </div>
        </a>
        <a
          href="https://wa.me/593979007178"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:scale-105 hover:shadow-2xl p-5 rounded-2xl"
        >
          <div className="text-center carousel__item">
            <h3 className="font-bold text-3xl font-['Krub', sans-serif] py-3">
              Henry Patricio Lopez Garcia
            </h3>
            <p className=" font-['Montserrat','sans-serif'] text-[#212121]">
              +593 97 900 7178
            </p>
            <p className=" font-['Montserrat','sans-serif'] text-[#212121]">
              henrylopezuniandesr@gmail.com
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Team;
