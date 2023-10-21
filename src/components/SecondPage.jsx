import React, { useContext } from "react";
import { PokeAPIContext } from "./PokeAPIContext";

const SecondPage = () => {
  const pokeNames = useContext(PokeAPIContext);

  return (
    <div>
      <h2>Tugas Modul 5 | Kelompok 33</h2>
      <h1>Nama Pokemon (11-20):</h1>
      {pokeNames.slice(10, 20).map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </div>
  );
};

export default SecondPage;
