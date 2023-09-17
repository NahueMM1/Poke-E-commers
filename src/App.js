import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PrimeBanner from "./components/primeBanner/primeBanner";
import SpacedBar from "./components/SpacedBars/spaceBar";
import InterLineContent from "./components/InterLineContent/InterLineContent";
import Carrito from "./components/Cart/Cart";
import { CartProvider } from "./components/context/CartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <PrimeBanner />
        <SpacedBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Carrito/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <InterLineContent/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
