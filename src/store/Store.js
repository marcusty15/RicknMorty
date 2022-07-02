import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);
const UseProvider = ({ children }) => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [persVivos, setPersVivos] = useState([])
  const [persMuertos, setPersMuertos] = useState([])
  const [persDesconocido, setPersDesconocido] = useState([])

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

  const statusPersonaje = (estado) => {
    if(estado === "Alive"){
      setPersMuertos([])
      setPersDesconocido([])
      const vivos = personajes.filter(personaje => personaje.status === "Alive")
      setPersVivos(vivos)
    } else if (estado === "Dead") {
      setPersVivos([])
      setPersDesconocido([])
      const muertos = personajes.filter(personaje => personaje.status === "Dead")
      setPersMuertos(muertos)
    } else {
      setPersMuertos([])
      setPersVivos([])
      const desconocidos = personajes.filter(personaje => personaje.status === "unknown")
      setPersDesconocido(desconocidos)
    }
  }
  const verTodos = () => {
    setPersMuertos([])
    setPersVivos([])
    setPersDesconocido([])
  }


  return (
    <Context.Provider
      value={{ ubicaciones, setUbicaciones, personajes, setPersonajes, statusPersonaje, verTodos, persVivos, persMuertos, persDesconocido }}
    >
      {children}
    </Context.Provider>
  );
};

export default UseProvider;
