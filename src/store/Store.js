import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);
const UseProvider = ({ children }) => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [img,setImg] = useState([])

  const obtenerUbicaciones = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    setUbicaciones(response.data.results);
    
  };
 

  const obtenerPersonajes = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setPersonajes(response.data.results);
  };
  
  useEffect(() => {
    obtenerUbicaciones();
    obtenerPersonajes();
  }, []);

  return (
    <Context.Provider
      value={{ ubicaciones, setUbicaciones, personajes, setPersonajes }}
    >
      {children}
    </Context.Provider>
  );
};

export default UseProvider;
