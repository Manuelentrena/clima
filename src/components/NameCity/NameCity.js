import styled from "@emotion/styled";
import { PrincipalOscuro } from "../../colors";

const NameCity = styled.p`
  position: absolute;
  top: 5vw;
  left: 1.5rem;
  color: ${({ tipo }) => PrincipalOscuro(tipo)};
  font-size: 10vw;
  margin: 0;
  white-space: nowrap;
  @media (min-width: 500px) {
    font-size: 3rem;
    top: 1rem;
  }
`;

export default NameCity;
