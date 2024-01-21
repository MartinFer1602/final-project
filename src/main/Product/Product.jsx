import { Link } from "react-router-dom";
import llanta1 from "../../assets/products/llanta1.jpg";
import aro1 from "../../assets/products/aro1.jpg";
import bateria1 from "../../assets/products/bateria1.jpg";
import aceite1 from "../../assets/products/aceite1.jpg";
import refrigerante1 from "../../assets/products/refrigerante1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Product.scss";
/* import InformationMore from "../Buttons/InformationMore/InformationMore"; */

function Product() {
  
  return (
    <section className="container text-center">
      <h1>NUESTROS PRODUCTOS</h1>
      <div className="row mt-4">
        
        <div
          className="col-sm-12 col-md-4 py-3"
          /* style={{ paddingRight: "100px", paddingLeft: "100px" }} */
        >
          <div className="card shadow">
            <img
              src={llanta1}
              className="img__llantas card-img-top mx-auto img-fluid"
              alt="llanta"
            />
            <div className="card-body">
                <h3>LLANTAS</h3>
                <p>Todo tipo de llantas: deportivas, todoterronos, solidas, mixtas entre otros. </p>
                <br />
                <Link to="/product">
                  <button className="custom-button">Ver más</button>
                </Link>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-4 py-3"
          /* style={{ paddingRight: "100px", paddingLeft: "100px" }} */
        >
          <div className="card shadow">
            <img
              src={aro1}
              className="img__llantas card-img-top mx-auto img-fluid"
              alt="Aro"
            />
            <div className="card-body">
              <h3>AROS</h3>
              <p>Todo tipo de llantas: deportivas, todoterronos, solidas, mixtas entre otros. </p>
              <br />
              <Link to="/product">
                <button className="custom-button">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-4 py-3"
          /* style={{ paddingRight: "100px", paddingLeft: "100px" }} */
        >
          <div className="card shadow">
            <img
              src={bateria1}
              className="img__llantas card-img-top mx-auto img-fluid"
              alt="llanta"
            />
            <div className="card-body">
              <h3>BATERIAS</h3>
              <p>Todo tipo de llantas: deportivas, todoterronos, solidas, mixtas entre otros. </p>
              <br />
              <Link to="/product">
                <button className="custom-button">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-4 offset-md-2 py-3"
          /* style={{ paddingRight: "100px", paddingLeft: "100px" }} */
        >
          <div className="card shadow">
            <img
              src={aceite1}
              className="img__llantas card-img-top mx-auto img-fluid"
              alt="aceite"
            />
            <div className="card-body">
              <h3>ACEITES</h3>
              <p>Todo tipo de llantas: deportivas, todoterronos, solidas, mixtas entre otros. </p>
              <br />
              <Link to="/product">
                <button className="custom-button">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-4 py-3"
          /* style={{ paddingRight: "100px", paddingLeft: "100px" }} */
        >
          <div className="card shadow">
            <img
              src={refrigerante1}
              className="img__llantas card-img-top mx-auto img-fluid"
              alt="refrigerante"
            />
            <div className="card-body">
              <h3>REFRIGERANTE</h3>
              <p>Todo tipo de llantas: deportivas, todoterronos, solidas, mixtas entre otros. </p>
              <br />
              <Link to="/product">
                <button className="custom-button">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
