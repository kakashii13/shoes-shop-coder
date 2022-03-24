import "./style/App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import error404 from "./assets/404.jpg";

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
            <Route
              path="/*"
              element={
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "100%" }}
                >
                  <img
                    style={{
                      width: "50%",
                      height: "80%",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                    src={error404}
                  />
                </div>
              }
            />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
