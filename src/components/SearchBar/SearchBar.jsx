import s from "styled-components";
import { Container, Button, ContainerButtonInput } from "./styled";
export default function SearchBar({ onSearch }) {
  return (
    <Container>
      <ContainerButtonInput>
        <input type="search" placeholder="id..." />

        <Button onClick={onSearch}>Agregar</Button>
      </ContainerButtonInput>
    </Container>
  );
}
