import styled from "@emotion/styled";
import { BackgroundInicio, BackgroundFinal } from "../../colors";

const Background = styled.div`
  background: linear-gradient(
    0deg,
    ${({ tipo }) => BackgroundInicio(tipo)} 0%,
    ${({ tipo }) => BackgroundFinal(tipo)} 50%,
    ${({ tipo }) => BackgroundFinal(tipo)} 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: relative;
`;

export default Background;
