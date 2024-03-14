import s from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const navigate = useNavigate();

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({ id, name, image, status, species });
    setIsFav(!isFav);
  };

  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        <button
          className={s.btn}
          onClick={() => {
            onClose(id);
          }}>
          X
        </button>
      </div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className={s.imgContainer}>
        <img src={image} alt="" />
        <h2 className={s.name} onClick={() => navigate(`/detail/${id}`)}>
          {name}
        </h2>
      </div>

      <div className={s.descriptionContainer}>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
