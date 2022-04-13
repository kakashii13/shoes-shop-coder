import "./style/App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import Footer from "./components/footer/Footer";
import Favs from "./components/Favs/Favs";
import Orders from "./components/Orders/Orders";
import Error404 from "./components/Error404";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:brand" element={<ItemListContainer />} />
            <Route path="/detail/:Id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
