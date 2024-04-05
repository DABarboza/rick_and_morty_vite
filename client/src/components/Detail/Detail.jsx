import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./Detail.module.css";
const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(() => data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
  }, [id]);

  return !character ? (
    <div>Cargando...</div>
  ) : (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img src={character.image} alt="" />
        <h2 className={s.name}>{character.name}</h2>
      </div>

      <div className={s.descriptionContainer}>
        <h2>Estatus: {character.status}</h2>
        <h2>Especie: {character.species}</h2>
        <h2>Genero: {character.gender}</h2>
        <h2>Origen: {character.origin.name}</h2>
      </div>
      <div className={s.buttonContainer}>
        <button
          className={s.btn}
          onClick={() => {
            onClose(id);
          }}>
          X
        </button>
      </div>
    </div>
  );
};

export default Detail;
