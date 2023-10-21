import React, { useContext } from "react";
import { PokeAPIContext } from "./PokeAPIContext";

const HomePage = () => {
  const pokeNames = useContext(PokeAPIContext);

  return (
    <div>
      <h2>Tugas Modul 5 | Kelompok 33</h2>
      <h1>Nama Pokemon (1-10):</h1>
      {pokeNames.slice(0, 10).map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </div>
  );
};

export default HomePage;
