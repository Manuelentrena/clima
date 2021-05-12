import React from "react";
import Marcador from "../Marcador/Marcador";
import styled from "@emotion/styled";
import { PrincipalOscuro75 } from "../../colors";

const OtherTemps = styled.p`
  font-size: 2rem;
  font-family: "Myanmar Text Regular";
  font-weight: 100;
  color: ${({ tipo }) => PrincipalOscuro75(tipo)};
`;

const TemperaturaPicos = ({ tipo, max, min }) => {
  return (
    <div className="temp">
      <div className="temp__data">
        <Marcador rotate="false" tipo={tipo} />
        <OtherTemps tipo={tipo}>{max}º</OtherTemps>
      </div>
      <div className="temp__data">
        <Marcador rotate="true" tipo={tipo} />
        <OtherTemps tipo={tipo}>{min}º</OtherTemps>
      </div>
    </div>
  );
};

export default TemperaturaPicos;
