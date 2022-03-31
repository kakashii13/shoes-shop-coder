import React from "react";
import useFavs from "./useFavs";

const FavsContainer = ({ itemsFavs }) => {
  const { addFav } = useFavs();
  return (
    <ul style={{ padding: "0", margin: "20px 0" }}>
      {itemsFavs.map((item) => (
        <li className="card" key={item.id}>
          <div className="card-img-container">
            <img className="shoe" src={item.pictureUrl} />
            <img
              onClick={() => addFav(item.id)}
              style={{
                width: "15px",
                cursor: "pointer",
                position: "absolute",
                right: "5px",
                top: "5px",
              }}
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
