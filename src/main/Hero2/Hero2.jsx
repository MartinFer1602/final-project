import { useState } from "react";
import ModalLogin from "../ModalLogin/ModalLogin";
import "./Hero2.scss";
function Hero2() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container__hero2">
      <div className="container__hero2-text">
        <h1>¡Ahora puedes ingresar tu cupón de descuento aquí!</h1>
        <p>
          Nueva modalidad de descuentos en nuestros productos en stock, aquí en
          nuestro sitio web. Para ello, pulsar al botón e ingresar su número de
          cupón
        </p>
      </div>
      <div>
        <button onClick={handleShow}>INGRESE SU CUPÓN</button>
        <ModalLogin show={show} handleClose={handleClose} />
      </div>
      

      
    </div>
  );
}
export default Hero2;
