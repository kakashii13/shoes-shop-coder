import "../../style/Item.css";
import { Link } from "react-router-dom";
import useFavs from "../Favs/useFavs";

const Item = ({ id, title, price, pictureUrl, fav }) => {
  const { addFav } = useFavs(id);
  return (
    <Link to={`detail/${id}`} style={{ textDecoration: "none", color: "#000" }}>
      <li className="card">
        <div className="card-img-container">
          <img className="shoe" src={pictureUrl} />
          <img
            onClick={addFav}
            className="fav"
            src={
              !fav
                ? "https://icongr.am/fontawesome/heart-o.svg?size=14&color=currentColor"
                : "https://icongr.am/fontawesome/heart.svg?size=14&color=currentColor"
            }
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
