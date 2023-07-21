import react from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Ourservices/Services';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';
import Content from './components/Mycontent/Content';
import Carrusel from './components/Carrusel/Carrusel';
import img1 from './assets/imgs/img1.webp';
import img2 from './assets/imgs/img2.webp';
import img3 from './assets/imgs/img3.webp';
import img4 from './assets/imgs/img4.webp';
import img5 from './assets/imgs/img5.webp';
import img6 from './assets/imgs/img6.webp';

function App() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="h-screen overflow-x-hidden">
      <div id="about">
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div id="services" className="pt-10">
        <Services />
      </div>
      <div id="team" className="pt-20">
        <Team />
      </div>
      <div className="pt-20" id="content">
        <Carrusel images={images} autoPlay={true} showButtons={true} />
      </div>
      <div>
        <Content />
      </div>
      <div id="contact" className="pt-20">
        <Contact />
      </div>
      <div id="location" className="pt-20">
        <Location />
      </div>
      <Footer />
    </div>
  );
}

export default App;
