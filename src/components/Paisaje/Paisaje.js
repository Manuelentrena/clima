/* import React, { useEffect, useState } from "react"; */
import PaisajeRojo from "../Paisaje/PaisajeRojo";
import PaisajeAzul from "../Paisaje/PaisajeAzul";
import PaisajeGris from "../Paisaje/PaisajeGris";
import PaisajeOscuro from "../Paisaje/PaisajeOscuro";

const Paisaje = ({ tipo }) => {
  return tipo === "azul" ? (
    <PaisajeAzul />
  ) : tipo === "rojo" ? (
    <PaisajeRojo />
  ) : tipo === "gris" ? (
    <PaisajeGris />
  ) : tipo === "oscuro" ? (
    <PaisajeOscuro />
  ) : null;
};

export default Paisaje;
