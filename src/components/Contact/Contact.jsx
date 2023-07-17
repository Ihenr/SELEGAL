import React from 'react';
import facebook from '../../assets/imgs/RedesSociales/facebook.png';
import twiter from '../../assets/imgs/RedesSociales/gorjeo.png';
import instagram from '../../assets/imgs/RedesSociales/instagram.png';
import movil from '../../assets/imgs/RedesSociales/movil.png';
import whatsapp from '../../assets/imgs/RedesSociales/whatsapp.png';

const Contact = () => {
  return (
    <section>
      <div className=" bg-[#eeeeee] py-10">
        <h2 className=" text-5xl uppercase text-center font-bold font-['Krub', sans-serif] pb-6 text-[#FFA046]">
          Contactanos
        </h2>
        <div className="flex flex-wrap  justify-center items-center gap-8">
          <a
            href="https://www.facebook.com/selegalfirmadeabogados?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-125"
          >
            <img
              className=" w-[60px] max-[500px]:w-[40px]"
              src={facebook}
              alt="Facebook"
            />
          </a>
          <a
            href="https://instagram.com/selegalasesoria?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-125"
          >
            <img
              className=" w-[60px] max-[500px]:w-[40px]"
              src={instagram}
              alt="Instagram"
            />
          </a>
          <a
            href="https://wa.me/593985570349"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-125"
          >
            <img
              className=" w-[60px] max-[500px]:w-[40px]"
              src={whatsapp}
              alt="Whatsapp"
            />
          </a>
          {/* <a href="#" className=" hover:scale-125">
            <img className=" w-[60px] max-[500px]:w-[40px]" src={twiter} alt="Twiter" />
          </a> */}
          <a
            href="tel:+593985570349"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-125"
          >
            <img className=" w-[60px] max-[500px]:w-[40px]" src={movil} alt="Movil" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
