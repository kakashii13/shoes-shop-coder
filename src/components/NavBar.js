import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
                <a className="nav-link active">Home</a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                Favs
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Link to="cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
