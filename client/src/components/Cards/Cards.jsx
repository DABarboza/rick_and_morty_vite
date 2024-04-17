import Card from "../Card/Card";
import s from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={s.container}>
      {characters.map((ch, index) => {
        // Agregar un prefijo único al id
        const uniqueId = `character-${index}-${ch.id}`;

        return (
          <Card
            key={uniqueId}
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
