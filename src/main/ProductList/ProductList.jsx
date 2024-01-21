import { Link } from "react-router-dom"
import { useState } from "react"
import llanta1 from '../../assets/products/llanta1.jpg'
import llanta2 from '../../assets/products/llanta2.jpg'
import llanta3 from '../../assets/products/llanta3.jpg'
import llanta4 from '../../assets/products/llanta4.jpg'
import aro1 from '../../assets/products/aro1.jpg'
import aro2 from '../../assets/products/aro2.jpg'
import aro3 from '../../assets/products/aro3.jpg'
import aro4 from '../../assets/products/aro4.jpg'
import bateria1 from '../../assets/products/bateria1.jpg'
import bateria2 from '../../assets/products/bateria2.jpg'
import bateria3 from '../../assets/products/bateria3.jpg'
import bateria4 from '../../assets/products/bateria4.jpg'
import aceite1 from '../../assets/products/aceite1.jpg'
import aceite2 from '../../assets/products/aceite2.jpg'
import aceite3 from '../../assets/products/aceite3.jpg'
import aceite4 from '../../assets/products/aceite4.jpg'
import refrigerante1 from '../../assets/products/refrigerante1.jpg'
import refrigerante2 from '../../assets/products/refrigerante2.jpg'
import refrigerante3 from '../../assets/products/refrigerante3.jpg'
import refrigerante4 from '../../assets/products/refrigerante4.jpg'
import InformationMore from "../Buttons/InformationMore/InformationMore"
import 'bootstrap/dist/css/bootstrap.min.css'
import './ProductList.scss'
import ProductX from "../ProductX/ProductX"


function ProductList () {
    const p1 = ['Producto altamente de calidad y con una garantía de 2 años ']
    const p2 = ['Producto altamente de calidad y con una garantía de 2 años ']
    const p3 = ['Producto altamente de calidad y con una garantía de 2 años ']
    const p4 = ['Producto altamente de calidad y con una garantía de 2 años ']
    const p5 = ['Producto altamente de calidad y con una garantía de 2 años ']
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        
            <main className="container">
        <section className="container text-center ">
        <ProductX show={show} handleClose={handleClose}/>
            <h1>NUESTROS PRODUCTOS</h1>
            <hr/>
            <h2 className="display-6">NEUMÁTICOS</h2>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={llanta1} className="img__llantas card-img-top mx-auto" alt="llanta" />
                        <div className="card-body" >
                            <h3>225/65R17 102H KENDA KR32 LLANTA PCR</h3>
                            <p className="price" >S/. 400</p>

                            <div className="container-button">
                                <InformationMore title="Más información" p={p1} />
                                <div className="cart" id="cart1" data-totalitems="0">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="page-wrapper">
                                    <button onClick={handleShow} className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={llanta2} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>225/40ZR18 92W KENDA KAISER KR20 LLANT</h3>
                            <p>s/. 450</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p1} />  
                                
                                <div className="cart" id="cart2" data-totalitems="0">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="page-wrapper">
                                    <button onClick={handleShow} className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={llanta3} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>155R13C 91/89N 8PR KENDA KR06 LLANTA LTR</h3>
                            <p>S/. 500 </p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p1} />
                                <div className="cart" id="cart3" data-totalitems="0">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3" >
                    <div className="all-cards card shadow mx-auto" >
                        <img src={llanta4} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>P265/65R17 112S KENDA KLEVER A/T KR28 LLANTA</h3>
                            <p>S/. 400</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p1} />
                                <div className="cart" id="cart4" data-totalitems="0">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <hr/>
        <section className="container text-center">
            <h2 className="display-6">AROS</h2>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={aro1} className="img__llantas card-img-top mx-auto" alt="llanta" />
                        <div className="card-body" >
                            <h3>ARO DE ALEACIÓN DEPORTIVO DARWIN RACING N°14 X 6.0. MODELO B-1220</h3>
                            <p>S/. 250</p>

                            <div className="container-button">
                                <InformationMore title="Más información" p={p2} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={aro2} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>ARO DE ALEACIÓN DEPORTIVO DARWIN RACING N°15 X 6.5. MODELO D-5270</h3>
                            <p>S/. 300</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p2} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={aro3} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>ARO DE ALEACIÓN DEPORTIVO DARWIN RACING N°15 X 7.0. MODELO B-768</h3>
                            <p>s/. 300</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p2} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={aro4} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>ARO DE ALEACIÓN DEPORTIVO DARWIN RACING N°14 X 6.0. MODELO B-337</h3>
                            <p>S/. 350</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p2} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <hr/>
        <section className="container text-center">
            <h2 className="display-6">BATERIAS</h2>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6 py-3" >
                    <div className="all-cards card shadow mx-auto" >
                        <img src={bateria1} className="img__llantas card-img-top mx-auto" alt="llanta" />
                        <div className="card-body" >
                            <h3>BATERÍA HANKOOK MF75D31R 75 AH 660CCA</h3>
                            <p>S/. 350</p>

                            <div className="container-button">
                                <InformationMore title="Más información" p={p3} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={bateria2} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>BATERIA BOSCH 80D23L (70AH/560A)</h3>
                            <p>S/. 300</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p3} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={bateria3} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>BATERÍA DGP MF56828 68AH 600CCA-BR</h3>
                            <p>S/. 400</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p3} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={bateria4} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>BATERÍA DGP MF105D31L 90AH 735CCA</h3>
                            <p>S/. 450</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p3} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <hr/>
        <section className="container text-center">
            <h2 className="display-6">ACEITES</h2>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={aceite1} className="img__llantas card-img-top mx-auto" alt="llanta" />
                        <div className="card-body" >
                            <h3>ACEITE DE MOTOR SEMI-SINTÉTICO 15W-40 DE 1 GL</h3>
                            <p>s/. 100</p>

                            <div className="container-button">
                                <InformationMore title="Más información" p={p4} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={aceite2} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>ACEITE DE MOTOR MINERAL 15W-40 DE 1 GL</h3>
                            <p>S/. 100</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p4} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={aceite3} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>ACEITE DE MOTOR SEMI-SINTÉTICO 10W-30 DE 1 GL</h3>
                            <p>S/. 150</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p4} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={aceite4} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>ACEITE DE MOTOR SINTÉTICO 5W-40 BOTELLA </h3>
                            <p>S/. 200</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p4} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <hr/>
        <section className="container text-center">
            <h2 className="display-6">REFRIGERANTES</h2>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={refrigerante1} className="img__llantas card-img-top mx-auto" alt="llanta" />
                        <div className="card-body" >
                            <h3>ANTICONGELANTE Y REFRIGERANTE LUBRITEK</h3>
                            <p>s/. 250</p>

                            <div className="container-button">
                                <InformationMore title="Más información" p={p5} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={refrigerante2} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>REFRIGERANTE RADIADOR VERDE SIMONIZ GALÓN</h3>
                            <p>S/. 100</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p5} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={refrigerante3} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>REFRIGERANTE RADIADOR ROJO SIMONIZ GALÓN</h3>
                            <p>S/. 50</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p5} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12 col-md-6 py-3">
                    <div className="all-cards card shadow mx-auto" >
                        <img src={refrigerante4} className="img__llantas card-img-top mx-auto" alt="llanta"/>
                        <div className="card-body" >
                            <h3>REFRIGERANTE LUBRITEK 33 % LONG LIFE COOLANT (19L)</h3>
                            <p>S/. 250</p>
                            <div className="container-button">
                                <InformationMore title="Más información" p={p5} />
                                
                                <div className="page-wrapper">
                                    <button className="addtocart">
                                        Añadir al carrito
                                        <span className="cart-item"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            
        </section>
        <hr/>
        </main> 
        </>

    )

}
export default ProductList