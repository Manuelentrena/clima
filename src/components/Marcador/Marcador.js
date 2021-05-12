import React from "react";
import styled from "@emotion/styled";
import { Rotate, PrincipalOscuro75 } from "../../colors";

const Svg = styled.svg`
  transform: ${({ rotate }) => Rotate(rotate)};
  & path {
    fill: ${({ tipo }) => PrincipalOscuro75(tipo)};
  }
`;

const Marcador = ({ rotate, tipo }) => {
  return (
    <Svg
      rotate={rotate}
      tipo={tipo}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
      overflow="visible"
    >
      <path d="M9 0l9 12H0L9 0z" fill="#ffffff" />
    </Svg>
  );
};

export default Marcador;
