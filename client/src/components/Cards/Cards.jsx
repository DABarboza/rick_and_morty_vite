import Card from "../Card/Card";
import s from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={s.container}>
      {characters.map((ch) => {
        return (
          <Card
            key={ch.id}
            id={ch.id}
            name={ch.name}
            status={ch.status}
            species={ch.species}
            gender={ch.gender}
            origin={ch.origin?.name}
            image={ch.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
