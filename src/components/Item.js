import "../style/Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <Link to={`detail/${id}`} style={{ textDecoration: "none", color: "#000" }}>
      <li className="card">
        <div className="card-img-container">
          <img className="shoe" src={pictureUrl} />
          <img
            className="fav"
            src="https://icongr.am/fontawesome/heart-o.svg?size=14&color=currentColor"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>$ {price}</p>
        </div>
      </li>
    </Link>
  );
};

export default Item;
