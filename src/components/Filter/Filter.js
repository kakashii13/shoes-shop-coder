import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import "../../style/Filter.css";
import useFilter from "./useFilter";

const Filter = () => {
  const { items } = useFilter();
  const brands = ["Nike", "Adidas", "Vans"];

  return (
    <div className="filter">
      <h2>Filtrar por:</h2>
      <ul>
        <li>
          <Link to="/">Todas</Link>
        </li>
        {brands.map((brand) => (
          <li key={brand}>
            <Link to={`/${brand}`}>{brand}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
