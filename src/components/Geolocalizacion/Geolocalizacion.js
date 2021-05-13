import React from "react";
import styled from "@emotion/styled";
import { Principal, Secundario } from "../../colors";

const ContainerGeo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  background-color: ${({ tipo }) => Principal(tipo)};
`;

const TextoGeo = styled.p`
  font-weight: 100;
  margin: 0;
  line-height: 1.3rem;
  margin-top: 0.2rem;
  color: white;
  font-size: 4vw;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
`;

const BotonGeo = styled.button`
  padding: 0 1rem;
  padding-top: 0.4rem;
  border: 3px solid ${({ tipo }) => Secundario(tipo)};
  border-radius: 25px;
  color: ${({ tipo }) => Principal(tipo)};
  font-family: "Myanmar Text Bold";
  height: 2.3rem;
  box-shadow: 5px 5px 6px 0px rgba(50, 50, 50, 0.33);
`;

const activarGeo = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    window.open(
      "https://support.google.com/accounts/answer/3467281?hl=es-419",
      "Activar Geolocalización Android"
    );
    return;
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.open(
      "https://support.apple.com/es-es/HT207092",
      "Activar Geolocalización iPhone"
    );
    return;
  }
  window.open(
    "https://support.google.com/chrome/answer/142065?co=GENIE.Platform%3DDesktop&hl=es&oco=1",
    "Activar Geolocalización General"
  );
  return;
};

const Geolocalizacion = ({ tipo }) => {
  return (
    <ContainerGeo tipo={tipo}>
      <TextoGeo>
        Geolocalización Bloqueada <br /> Activalo en tu dispositivo.
      </TextoGeo>
      <BotonGeo type="button" onClick={activarGeo} tipo={tipo}>
        ACTIVAR
      </BotonGeo>
    </ContainerGeo>
  );
};

export default Geolocalizacion;
