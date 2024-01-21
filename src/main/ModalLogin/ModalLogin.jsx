import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalLogin.scss";
const ModalLogin = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        
        <Modal.Body className="body-modal text-center">
          <h1>Iniciar sesión</h1>
          <hr />
          <p>Usuario</p>
          <input type="email" placeholder="Ingrese el usuario" />
          <hr />
          <p>Contraseña</p>
          <input type="password" placeholder="Ingrese la contraseña" />
          <hr />
          <p>Cupón</p>
          <input type="text" placeholder="Ingrese el N° de cupón" />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button className="close-button" variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Acceder
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalLogin;
