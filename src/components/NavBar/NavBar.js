import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";

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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="navbar-brand" style={{ margin: "0" }}>
              Shoes-Shop
            </h1>
          </Link>
          <div
            className="collapse navbar-collapse justify-content-lg-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <p className="nav-link active">Home</p>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/favs" style={{ textDecoration: "none" }}>
                  <p className="nav-link active" href="#">
                    Favs
                  </p>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <p className="nav-link active" href="#">
                  Contact
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Link to="cart">
          <CartWidget cartAlert={cartAlert} />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
