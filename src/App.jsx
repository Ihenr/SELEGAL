import react from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Ourservices/Services';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';
import Content from './components/Mycontent/Content';

function App() {
  return (
    <div className="h-screen overflow-x-hidden  ">
      <Header></Header>
      <About />
      <Services />
      <Team />
      <Content />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
