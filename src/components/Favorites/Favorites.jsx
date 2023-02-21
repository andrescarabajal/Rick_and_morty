import { useSelector } from "react-redux";
import Card from "../Cards/Card/Card";

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites); // seleccionar el estado de redux

  return (
    <div style={{ display: "flex" }}>
      {myFavorites.map((elem) => (
        <Card
          name={elem.name}
          species={elem.species}
          gender={elem.gender}
          image={elem.image}
          id={elem.id}
          onClose={() => alert("Para eliminar toca el corazon")}
        />
      ))}
    </div>
  );
}
