import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";
import FavWidget from "./FavWidget";

const NavBar = () => {
  const [cartAlert] = useState(false);
  return (
    <div>
      <div
        style={{
          padding: "2px",
          background: "#ccc",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Envios gratis desde $14999
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="navbar-brand" style={{ margin: "0" }}>
              Shoes-Shop
            </h1>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Link to="cart">
            <CartWidget cartAlert={cartAlert} />
          </Link>
          <Link to="favs">
            <FavWidget />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
