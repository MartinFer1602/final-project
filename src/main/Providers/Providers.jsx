import { useRef } from 'react';
import slide1 from '../../assets/providers/proveedor1.jpg';
import slide2 from '../../assets/providers/proveedor2.png';
import slide3 from '../../assets/providers/proveedor3.png';
import slide4 from '../../assets/providers/proveedor4.png';
import slide5 from '../../assets/providers/proveedor5.png';
import slide6 from '../../assets/providers/proveedor6.jpg';
import slide7 from '../../assets/providers/proveedor7.jpg';
import slide8 from '../../assets/providers/proveedor8.png';
import './Providers.scss';

function Providers() {
  const carSldRef = useRef(null);

  const handleNextClick = () => {
    if (carSldRef.current) {
      carSldRef.current.scrollLeft += 220;
    }
  };

  const handlePrevClick = () => {
    if (carSldRef.current) {
      carSldRef.current.scrollLeft -= 220;
    }
  };

  return (
    <div className="providers-container">
      <h5>Empresas con las que trabajamos:</h5>
      <div id="carrusel" className="slider">
        <div ref={carSldRef} id="carrusel-slides" className="slides">
          <div className="slide">
            <img src={slide1} alt="" />
          </div>
          <div className="slide">
            <img src={slide2} alt="" />
          </div>
          <div className="slide">
            <img src={slide3} alt="" />
          </div>
          <div className="slide">
            <img src={slide4} alt="" />
          </div>
          <div className="slide">
            <img src={slide5} alt="" />
          </div>
          <div className="slide">
            <img src={slide6} alt="" />
          </div>
          <div className="slide">
            <img src={slide7} alt="" />
          </div>
          <div className="slide">
            <img src={slide8} alt="" />
          </div>
        </div>
        <button className="btn-prev" onClick={handlePrevClick}>
          
        </button>
        <button className="btn-next" onClick={handleNextClick}>
          
        </button>
      </div>
    </div>
  );
}

export default Providers;
