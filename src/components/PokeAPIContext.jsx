import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokeAPIContext = createContext();

export const PokeAPIProvider = ({ children }) => {
  const [pokeNames, setPokeNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=20`
        );
        const pokeData = response.data.results;
        const names = pokeData.map((pokemon) => pokemon.name);
        setPokeNames(names);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <PokeAPIContext.Provider value={pokeNames}>
      {children}
    </PokeAPIContext.Provider>
  );
};
