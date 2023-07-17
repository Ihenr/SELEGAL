import React from 'react';

const Location = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-center py-14 text-5xl uppercase font-bold font-['Krub', sans-serif] text-[#FFA046]">
        Ubicación
      </h2>
      <div className="shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.0317790868654!2d-78.65458203045917!3d-1.668300999894759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3a826dfbf568b%3A0x29b84801f1da5cf3!2sPrimera%20Constituyente%20%26%20Juan%20Lavalle%2C%20Riobamba!5e0!3m2!1ses!2sec!4v1688105521402!5m2!1ses!2sec"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="shadow-2xl rounded-xl w-[600px] my-11  px-6">
        <a
          target="_blank"
          href="https://goo.gl/maps/LV8574Dt8z4tjJYZ9"
          className="flex justify-center items-center text-3xl font-['Krub', sans-serif] font-thin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-32 h-32 text-[#e98348] mx-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p>
            Juan Lavalle y 1ra Constituyente esquina, edificio Rivas Carbajal, piso 3,
            oficina 203, Riobamba-Ecuador
          </p>
        </a>
      </div>
    </section>
  );
};

export default Location;
