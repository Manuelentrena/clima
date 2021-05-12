const KEY = "b87cafc48925a9ed60ca20297f8d38ac";
const urlGEO = "";
const url = "";

export const consultarAPI = async (ciudad, pais, { latitude, longitude }) => {
  if (latitude && longitude) {
    if (location.protocol === "http:") {
      urlGEO = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
    } else {
      urlGEO = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
    }

    const respuestaGEO = await fetch(urlGEO);
    return await respuestaGEO.json();
  } else {
    if (location.protocol === "http:") {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${KEY}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${KEY}`;
    }

    const respuesta = await fetch(url);
    return await respuesta.json();
  }
};
