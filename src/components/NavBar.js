import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand">Shoes-Shop</h1>
        <div className="">
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                Shoes
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                Contact
              </a>
            </li>
            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
