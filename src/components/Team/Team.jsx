import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center py-16 team">
      <h2 className=" text-5xl uppercase  font-bold font-['Krub', sans-serif]">
        Nuestro Equipo
      </h2>
      <div className="w-full flex flex-wrap gap-10 text-2xl  p-5  justify-evenly items-center carousel__slider">
        <div className="text-center carousel__item">
          <h3 className="font-bold text-3xl font-['Krub', sans-serif] py-3">
            Javier Morocho
          </h3>
          <p className=" font-['Montserrat','sans-serif'] text-[#3b3b3b]">0994510873</p>
          <p className=" font-['Montserrat','sans-serif'] text-[#3b3b3b]">
            morocho.javier@gmail.com
          </p>
        </div>
        <div className="text-center carousel__item">
          <h3 className="font-bold text-3xl font-['Krub', sans-serif] py-3">
            Javier Morocho
          </h3>
          <p className=" font-['Montserrat','sans-serif'] text-[#3b3b3b]">0994510873</p>
          <p className=" font-['Montserrat','sans-serif'] text-[#3b3b3b]">
            morocho.javier@gmail.com
          </p>
        </div>
        <div className="text-center carousel__item">
          <h3 className="font-bold text-3xl font-['Krub', sans-serif] py-3">
            Javier Morocho
          </h3>
          <p className=" font-['Montserrat','sans-serif'] text-[#3b3b3b]">0994510873</p>
          <p className=" font-['Montserrat','sans-serif'] text-[#3b3b3b]">
            morocho.javier@gmail.com
          </p>
        </div>
        <div className="text-center carousel__item">
          <h3 className="font-bold text-3xl font-['Krub', sans-serif] py-3">
            Javier Morocho
          </h3>
          <p className=" font-['Montserrat','sans-serif'] text-[#3b3b3b]">0994510873</p>
          <p className=" font-['Montserrat','sans-serif'] text-[#3b3b3b]">
            morocho.javier@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
