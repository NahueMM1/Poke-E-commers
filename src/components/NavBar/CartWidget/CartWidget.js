import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import shoppingCart from "../../assets/shoppingCart.png";

const CartWidget = () => {
  const {totalquantity} = useContext(CartContext)

  return(
      <Link to='/Cart' classname='shoppingCart'>
          <img className="CartImg" src={shoppingCart} alt='cart-widget' />
          {totalquantity}
      </Link>
  )
}

export default CartWidget