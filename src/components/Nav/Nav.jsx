import s from "./nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
export const Nav = () => {
  return (
    <div className={s.container}>
      <SearchBar onClose={onClose} />
    </div>
  );
};

export default Nav;
