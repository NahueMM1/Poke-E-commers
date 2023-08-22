import shoppingCart from "../../assets/shoppingCart.png";

function CartWidget() {
  return (
    <div className="ShoppingCart">
      <img src={shoppingCart} alt="ShoppingCart" />
      <p>0</p>
    </div>
  );
}

export default CartWidget;
