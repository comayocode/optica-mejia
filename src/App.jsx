import './App.css';
import {
  Navbar,
  Hero,
  About,
  Products,
  Testimonials,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    /* Componentes para la landing page */
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='body-components'>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
