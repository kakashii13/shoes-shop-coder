import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import FavWidget from "./FavWidget";

const NavBar = () => {
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex align-items-center">
        <div className="container-fluid" style={{ position: "relative" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="navbar-brand" style={{ margin: "0" }}>
              Shoes-Shop
            </h1>
          </Link>
          <Link to="cart">
            <CartWidget />
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
