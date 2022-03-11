import ItemCount from "./ItemCount";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <li className="card" style={{ width: "300px" }}>
      <img src={pictureUrl} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{price}</p>
        <ItemCount />
      </div>
    </li>
  );
};

export default Item;
