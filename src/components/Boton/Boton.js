import React from "react";
import { Botonstyled } from "./styledBoton";

const Boton = ({ tipo, showForm }) => {
  return (
    <Botonstyled tipo={tipo} onClick={showForm}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27.4"
        height="37.9"
        overflow="visible"
      >
        <path
          d="M13.7 0C6.1 0 0 6.1 0 13.7c0 9.4 12.3 23.2 12.8 23.7s1.2.5 1.7.1l.1-.1c.5-.6 12.8-14.4 12.8-23.7C27.4 6.1 21.3 0 13.7 0zm0 20.6c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9c3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9z"
          fill="#ffffff"
        />
      </svg>
    </Botonstyled>
  );
};

export default Boton;
