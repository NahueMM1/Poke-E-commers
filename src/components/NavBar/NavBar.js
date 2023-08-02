import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <div className="component">
                <button>Inicio</button>
                <button>Productos</button>
                <button>Info</button>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar