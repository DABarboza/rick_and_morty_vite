import Card from "../Card/Card";
import s from "./Cards.module.css";

export default function Cards({ characters }) {
  return (
    <div className={s.container}>
      {characters.map((ch) => {
        return (
          <Card
            key={ch.id}
            name={ch.name}
            status={ch.status}
            species={ch.species}
            gender={ch.gender}
            origin={ch.origin.name}
            image={ch.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
