import "./style/App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import error404 from "./assets/404.jpg";
import Footer from "./components/footer/Footer";
import Favs from "./components/Favs/Favs";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:Id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favs" element={<Favs />} />
            <Route
              path="/*"
              element={
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "100%" }}
                >
                  Error 404
                </div>
              }
            />
            <Route path="/order" element={<Orders />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
