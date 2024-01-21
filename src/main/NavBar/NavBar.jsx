import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logito from "../../assets/icons/logito.jpg";
import login from "../../assets/icons/iniciar-sesion.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ModalLogin from "../ModalLogin/ModalLogin";
import "./NavBar.scss";

export const NavBar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <img className="logo" src={logito} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-5 me-auto ms-auto">
              <Link
                className={`nav-link fw-semibold fs-5 text-light ${
                  location.pathname === "/home" ? "active" : ""
                }`}
                to="/home"
              >
                INICIO
              </Link>
              <Link
                className={`nav-link fw-semibold fs-5 text-light ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                NOSOTROS
              </Link>
              <Link
                className={`nav-link fw-semibold fs-5 text-light ${
                  location.pathname === "/product" ? "active" : ""
                }`}
                to="/product"
              >
                PRODUCTOS
              </Link>
              <Link
                className={`nav-link fw-semibold fs-5 text-light ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                CONTACTO
              </Link>
              <button className="nav-link fw-semibold fs-5 text-light" onClick={handleShow}>
                <img className="loginIcon" src={login} alt="login" />
              </button>
            </div>
          </div>
        </div>
        <ModalLogin show={show} handleClose={handleClose}/>
      </nav>
    </>
  );
};
