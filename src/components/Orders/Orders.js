import "../../style/Order.css";
import Resume from "../Cart/Resume";
import useOrder from "./useOrder";

const Orders = () => {
  const { userData, setUserData, order } = useOrder();
  return (
    <div className="form-container container">
      <form className="form-order">
        <label>Nombre</label>
        <input
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <label>Apellido</label>
        <input
          onChange={(e) =>
            setUserData({ ...userData, surname: e.target.value })
          }
        />
        <label>Email</label>
        <input
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <label>Metodo de pago</label>
        <select
          onChange={(e) =>
            setUserData({ ...userData, payment: e.target.value })
          }
        >
          <option>Visa</option>
          <option>MasterCard</option>
          <option>American</option>
          <option>PagoFacil</option>
        </select>
        <button className="btn btn-dark" onClick={order}>
          Pagar
        </button>
      </form>
      <div className="resume">
        <Resume />
      </div>
    </div>
  );
};

export default Orders;
