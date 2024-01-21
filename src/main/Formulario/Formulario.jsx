import 'bootstrap/dist/css/bootstrap.min.css'
import { useState , useEffect } from 'react';
import swal from 'sweetalert';
import './Formulario.scss'

function Formulario() {
  const getRegistries = () => {
    const data = localStorage.getItem('registries');
    return data ? JSON.parse(data) : [];
  };

  const [registries, setRegistries] = useState(getRegistries());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(''); 
  const [msm, setMsm] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [msmError, setMsmError] = useState('');

  const buttonSave = (e) => {
    e.preventDefault();

    // Validación
    if (!name.trim()) {
      setNameError('********************Ingrese su nombre********************');
      return;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('********************Ingrese su correo electrónico********************');
      return;
    } else {
      setEmailError('');
    }

    if (!number.trim()) {
      setNumberError('********************Ingrese su número telefónico********************');
      return;
    } else {
      setEmailError('');
    }

    if (!msm.trim()) {
      setMsmError('********************Ingrese su mensaje********************');
      return;
    } else {
      setMsmError('');
    }

    // Guardar datos si la validación es exitosa
    const myObject = { name, email, number, msm };
    setRegistries([...registries, myObject]);
    clear();
    mostrarMensaje();
  };

  const clear = () => {
    setName('');
    setEmail('');
    setNumber('');
    setMsm('');
    document.getElementById('miFormulario').reset();
  };

  useEffect(() => {
    localStorage.setItem('registries', JSON.stringify(registries));
  }, [registries]);

  const mostrarMensaje = () => {
    swal({
      text: 'Tus datos fueron enviados con éxito',
      icon: 'success',
      button: 'Aceptar',
      timer: '2000',
    });
  };

  return (
    <>
      <div className="formulario container">
        <form id="miFormulario" onSubmit={buttonSave}>
          <h2>FORMULARIO DE REGISTRO</h2>
          <p>Este formulario contiene un filtro de autenticidad, favor de rellena con veracidad. </p>
          <hr />
          <div className="container-name mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="name form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su nombre completo"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="text-danger">{nameError}</div>
          </div>
          <div className="container-email mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Correo electrónico:
            </label>
            <input
              type="email"
              className="email form-control"
              id="exampleFormControlInput2"
              placeholder="Ingrese su correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="text-danger">{emailError}</div>
          </div>
          <div className="container-number mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              Número:
            </label>
            <input
              type="text"
              className="number form-control"
              id="exampleFormControlInput3"
              placeholder="Ingrese su número completo"
              onChange={(e) => setNumber(e.target.value)}
            />
            <div className="text-danger">{numberError}</div>
          </div>
          <div className="container-msm mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Mensaje:
            </label>
            <textarea
              className="msm form-control"
              id="exampleFormControlTextarea1"
              placeholder="Ingrese su mensaje"
              rows="7"
              onChange={(e) => setMsm(e.target.value)}
            ></textarea>
            <div className="text-danger">{msmError}</div>
          </div>
          <div className="container-submit mb-3">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Formulario;