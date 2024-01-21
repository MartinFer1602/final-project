import { Link } from "react-router-dom";
import iconFacebook from "../../assets/icons/facebook.png"
import iconInstagram from "../../assets/icons/instagram.png"
import iconTiktok from "../../assets/icons/tik-tok.png"
import './Footer.scss'
function Footer() {
    return (
      <>
        <footer className="container-fluid footer">
          <div>
            <h3>CONTACTO</h3>
            <p>Correo: info@goldcar.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div>
            <h3>ENLACES</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/product">Productos</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3>SÍGUENOS: </h3>
            <div className="container__icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img className="icon__facebook" src={iconFacebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img className="icon__instagram" src={iconInstagram} alt="instagram" />
              </a>
              <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer">
                <img className="icon__tik-tok" src={iconTiktok} alt="tiktok" />
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;