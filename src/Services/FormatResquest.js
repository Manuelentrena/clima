import chooseAnimation from "./Animation";
import chooseInterfaz from "./Interfaz";
import chooseNameCountry from "./nameCountries";

const data = {
  zona: "dia",
  temp: "0º",
  max: "0º",
  min: "0º",
  wind: "1",
  weather: "despejado",
  country: "No country",
  city: "No city",
  largeCity: "",
  tipo: "rojo",
};

const kelvin = 273.15;

function calcularZonaHoraria(icon) {
  if (icon !== undefined) {
    if (icon.slice(-1) === "d") {
      return "dia";
    }
    if (icon.slice(-1) === "n") {
      return "noche";
    }
  }
  return "dia";
}

const FormatResquest = (respuesta) => {
  data.zona = calcularZonaHoraria(respuesta?.weather?.[0].icon);
  data.temp = parseFloat(respuesta?.main?.temp - kelvin, 10).toFixed(1);
  data.max = parseFloat(respuesta?.main?.temp_max - kelvin, 10).toFixed(1);
  data.min = parseFloat(respuesta?.main?.temp_min - kelvin, 10).toFixed(1);
  data.wind = respuesta?.wind?.speed;
  data.city = respuesta?.name;
  data.largeCity = chooseNameCountry(respuesta?.sys?.country);
  data.country = respuesta?.sys?.country;
  data.weather = chooseAnimation(respuesta?.weather?.[0].description);
  data.tipo = chooseInterfaz(data.weather, data.zona);
  console.log(respuesta);
  console.log(data);
  return data;
};

export default FormatResquest;
