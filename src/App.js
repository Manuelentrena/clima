import React from "react";
import Paisaje from "./components/Paisaje/Paisaje";
import Molino from "./components/Molino/Molino";
import Clima from "./components/Clima/Clima";
import Boton from "./components/Boton/Boton";
import Background from "./components/Background/Background";
import Form from "./components/Form/Form";

function App() {
  const tipo = "azul";
  return (
    <Background tipo={tipo}>
      <div className="data">
        <Clima viento="1.5" franja="noche" archivo="nieve-ligera" />
      </div>
      <Molino id="molino1" viento="1" tipo={tipo} />
      <Molino id="molino2" viento="1" tipo={tipo} />
      <Molino id="molino3" viento="1" tipo={tipo} />
      <Boton tipo={tipo} />
      <Paisaje tipo={tipo} />
      <Form tipo={tipo} />
    </Background>
  );
}

export default App;
