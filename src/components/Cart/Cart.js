import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Carrito = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No tienes productos en tu carrito</h1>
        <Link to="/" classname="Option">
          Productos
        </Link>
      </div>
    );
  }

//   return (
//     <div>
//       {cart.map((p) => (
//         <CartItem />   (SE NECESITA AGREGAR EL MAPEADO DE PRODUCTOS EN EL COMPONENTE CARD ITEMS PARA PODER HACER USO DE LA KEY 'REVISAR Y CORREGIR')
//       ))}
//       <h3>Total: ${total}</h3>
//       <button onClick={() => clearCart()} className="Button">
//         {" "}
//         Limpiar carrito
//       </button>
//       <Link to="/checkout" className="Option">
//         Checkout
//       </Link>
//     </div>
//   );
};

export default Carrito;
