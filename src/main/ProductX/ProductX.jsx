import carrito from "../../assets/icons/carro-de-la-compra.png"
import  { useState } from 'react';
import "./ProductX.scss";

function ProductoX() {
 
  const [contadorProductos, setContadorProductos] = useState(0);
  const addProduct = () => {
    setContadorProductos(contadorProductos + 1);
  };

  return (
    <div className="producto-carrito" >
      <h1>Producto X</h1>
      <button onClick={addProduct}>Añadir producto</button>
      <p>Número de productos: {contadorProductos}</p>
      <img src={carrito} alt="carrito" />
    </div>
  );
}

// Exporta el componente
export default ProductoX;
