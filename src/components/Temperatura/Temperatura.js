import styled from "@emotion/styled";
import { PrincipalOscuro } from "../../colors";

const Temperatura = styled.p`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 45%;
  left: 50%;
  color: ${({ tipo }) => PrincipalOscuro(tipo)};
  font-size: 16vw;
  margin: 0;
  font-family: "Myanmar Text Regular";
  font-weight: 100;
  @media (min-width: 500px) {
    font-size: 5rem;
  }
`;

export default Temperatura;
