import { useState } from "react";
import { Button, ContainerButtonInput } from "./styled";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  const clearInput = () => {
    setId("");
  };
  return (
    <ContainerButtonInput>
      <input
        type="search"
        placeholder="id..."
        onChange={handleChange}
        value={id}
      />
      <Button
        onClick={() => {
          onSearch(id), clearInput();
        }}>
        Agregar
      </Button>
    </ContainerButtonInput>
  );
}
