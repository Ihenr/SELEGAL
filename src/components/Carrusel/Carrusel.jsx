import React, { useState, useEffect } from 'react';
import './Carrusel.css';

const Carrusel = ({ images, autoPlay, showButtons }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, image, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 2500);
      return () => clearInterval(interval);
    }
  });

  return (
    <section className="flex justify-center items-center py-20 flex-col ">
      <div className=" slides ">
        <img
          src={selectedImage}
          alt="SELEGAL"
          onLoad={() => setLoaded(true)}
          className={loaded ? 'loaded' : ''}
        />
        {showButtons && (
          <div className="controls">
            <button onClick={previous} className=" text-3xl opacity-0 hover:opacity-100">
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffbf00"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 6l-6 6l6 6" />
                </svg>
              }
            </button>
            <button onClick={next} className=" text-3xl opacity-0 hover:opacity-100">
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-right"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffbf00"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              }
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carrusel;
