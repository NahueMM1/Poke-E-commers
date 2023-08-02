import shoppingCart from './assets/shoppingCart.png'

function CartWidget() {
    return (
        <div className='ShoppingCart'>
            <img src={shoppingCart} alt="ShoppingCart" />
            0
        </div>
    )
};

export default CartWidget