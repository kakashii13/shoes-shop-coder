import React from "react";
import useFavs from "./useFavs";
import "../../style/Favs.css";

const FavsContainer = ({ itemsFavs }) => {
  const { addFav } = useFavs();
  return (
    <ul className="fav-list">
      {itemsFavs.map((item) => (
        <li className="card my-3" key={item.id}>
          <div className="card-img-container">
            <img className="shoe" src={item.pictureUrl} />
            <img
              className="icon-fav"
              onClick={() => addFav(item.id)}
              src={
                !item?.fav
                  ? "https://icongr.am/fontawesome/heart-o.svg?size=14&color=currentColor"
                  : "https://icongr.am/fontawesome/heart.svg?size=14&color=currentColor"
              }
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p>$ {item.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FavsContainer;
