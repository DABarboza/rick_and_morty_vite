import Card from "./Card";

export default function Cards({ characters }) {
  return (
    <div>
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
