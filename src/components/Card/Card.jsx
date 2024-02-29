import s from "./Card.module.css";
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img src={image} alt="" />
        <h2 className={s.name}>{name}</h2>
      </div>

      <div className={s.descriptionContainer}>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
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
}
