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
import img1 from './assets/imgs/img1.jpg';
import img2 from './assets/imgs/img2.jpg';
import img3 from './assets/imgs/img3.jpg';
import img4 from './assets/imgs/img4.jpg';
import img5 from './assets/imgs/img5.jpg';
import img6 from './assets/imgs/img6.jpg';

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
      <div id="services">
        <Services />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="carrusel">
        <Carrusel images={images} autoPlay={true} showButtons={true} />
      </div>
      <div id="content">
        <Content />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="location">
        <Location />
      </div>
      <Footer />
    </div>
  );
}

export default App;
