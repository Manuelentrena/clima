import React, { useState, useLayoutEffect, useEffect } from "react";
import Paisaje from "./components/Paisaje/Paisaje";
import Molino from "./components/Molino/Molino";
import Clima from "./components/Clima/Clima";
import Boton from "./components/Boton/Boton";
import Background from "./components/Background/Background";
import Form from "./components/Form/Form";
import { consultarAPI } from "./Services/Api";
import FormatResquest from "./Services/FormatResquest";
import NameCity from "./components/NameCity/NameCity";
import NameCountry from "./components/NameCountry/NameCountry";
import Temperatura from "./components/Temperatura/Temperatura";
import TemperaturaPicos from "./components/TemperaturaPicos/TemperaturaPicos";
import Footer from "./components/Footer/Footer";

const climaDefault = {
  zona: "dia",
  temp: "0",
  max: "0",
  min: "0",
  wind: "1",
  weather: "despejado",
  country: "No country",
  city: "No city",
  largeCity: "",
  tipo: "rojo",
};

const busquedaDefault = {
  ciudad: "",
  pais: "",
};

function App() {
  /* Data del clima */
  const [clima, setClima] = useState(climaDefault);

  /* Extraemos datos de clima */
  const {
    tipo,
    zona,
    weather,
    wind,
    city,
    largeCity,
    country,
    temp,
    min,
    max,
  } = clima;
  /* Data del Form */
  const [busqueda, guardarBusqueda] = useState(busquedaDefault);
  /* Consulktar API State */
  const [hasPeticion, setHasPeticion] = useState(false);

  /* Extraemos data del Form */
  const { ciudad, pais } = busqueda;

  /* Datos al inicio del componente */
  useLayoutEffect(() => {
    async function fetchData() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function (position) {
          const respuesta = await consultarAPI(null, null, position.coords);
          if (respuesta.cod === 200) {
            setClima(FormatResquest(respuesta));
          } else {
            setClima(climaDefault);
          }
        });
      } else {
        setHasPeticion(true);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const respuesta = await consultarAPI(ciudad, pais, false);
      if (respuesta.cod === 200) {
        setClima(FormatResquest(respuesta));
      } else {
        /* Cerramos peticion para que no se refresque mas de una vez */
        setHasPeticion(false);
        setClima(climaDefault);
        guardarBusqueda(busquedaDefault);
      }
      setHasPeticion(false);
    }
    /* Validamos peticion */
    if (hasPeticion) {
      fetchData();
    }
  }, [hasPeticion, ciudad, pais]);

  /* Estado visual del Form */
  const [form, setForm] = useState(false);

  /* Funcion toggle form del boton */
  const showForm = () => {
    setForm(!form);
  };

  return (
    <Background tipo={tipo}>
      <div className="data">
        <NameCity tipo={tipo}>{city.toUpperCase()}</NameCity>
        <NameCountry tipo={tipo}>{country + ", " + largeCity}</NameCountry>
        <Clima viento={1} franja={zona} archivo={weather} />
        <Temperatura tipo={tipo}>{temp}º</Temperatura>
        <TemperaturaPicos tipo={tipo} max={max} min={min} />
      </div>
      <Molino id="molino1" viento={wind / 2.1} tipo={tipo} />
      <Molino id="molino2" viento={wind / 2} tipo={tipo} />
      <Molino id="molino3" viento={wind / 1.9} tipo={tipo} />
      <Boton tipo={tipo} showForm={showForm} />
      <Paisaje tipo={tipo} />
      {form ? (
        <Form
          tipo={tipo}
          guardarBusqueda={guardarBusqueda}
          busqueda={busqueda}
          setHasPeticion={setHasPeticion}
        />
      ) : null}
      <Footer tipo={tipo} />
    </Background>
  );
}

export default App;
