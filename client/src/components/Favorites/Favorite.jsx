import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import s from "./Favorite.module.css";
const Favorite = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];
  const [aux, setAux] = useState("false");

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div className={s.div}>
        <select name="" id="" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select name="" id="" onChange={handleFilter}>
          {optionsGender.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>
      <Cards characters={myFavorites} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorite);
