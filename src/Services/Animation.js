function chooseAnimation(description) {
  switch (description) {
    case "clear sky":
      return "despejado";
    case "squalls":
      return "despejado-lluvia";
    case "light intensity drizzle":
      return "despejado-lluvia";
    case "light intensity shower rain":
      return "despejado-lluvia";
    case "Light shower snow":
      return "despejado-nieve";
    case "mist":
      return "despejado-nublado";
    case "few clouds":
      return "despejado-nublado";
    case "scattered clouds":
      return "despejado-nublado";
    case "broken clouds":
      return "nublado";
    case "overcast clouds":
      return "nublado";
    case "Heavy snow":
      return "nieve-fuerte";
    case "Heavy shower snow":
      return "nieve-fuerte";
    case "Snow":
      return "nieve-moderada";
    case "Light rain and snow":
      return "nieve-moderada";
    case "Rain and snow":
      return "nieve-moderada";
    case "Shower snow":
      return "nieve-moderada";
    case "light snow":
      return "nieve-ligera";
    case "sand/ dust whirls":
      return "viento";
    case "sand":
      return "viento";
    case "volcanic ash":
      return "viento";
    case "dust":
      return "viento";
    case "tornado":
      return "viento";
    case "freezing rain":
      return "granizada";
    case "light thunderstorm":
      return "tormenta-lluvia";
    case "ragged thunderstorm":
      return "tormenta-lluvia";
    case "very heavy rain":
      return "tormenta-lluvia";
    case "extreme rain":
      return "tormenta-lluvia";
    case "thunderstorm with light rain":
      return "tormenta-rayos";
    case "thunderstorm with rain":
      return "tormenta-rayos";
    case "thunderstorm with heavy rain":
      return "tormenta-rayos";
    case "thunderstorm":
      return "tormenta-rayos";
    case "heavy thunderstorm":
      return "tormenta-rayos";
    case "thunderstorm with light drizzle":
      return "tormenta-rayos";
    case "thunderstorm with drizzle":
      return "tormenta-rayos";
    case "thunderstorm with heavy drizzle":
      return "tormenta-rayos";
    case "heavy shower rain and drizzle":
      return "lluvia-fuerte";
    case "heavy intensity rain":
      return "lluvia-fuerte";
    case "heavy intensity shower rain":
      return "lluvia-fuerte";
    case "heavy intensity drizzle rain":
      return "lluvia-fuerte";
    case "heavy intensity drizzle":
      return "lluvia-moderada";
    case "light intensity drizzle rain":
      return "lluvia-moderada";
    case "shower rain and drizzle":
      return "lluvia-moderada";
    case "moderate rain":
      return "lluvia-moderada";
    case "shower rain":
      return "lluvia-moderada";
    case "ragged shower rain":
      return "lluvia-moderada";
    case "drizzle":
      return "lluvia-ligera";
    case "drizzle rain":
      return "lluvia-ligera";
    case "shower drizzle":
      return "lluvia-ligera";
    case "light rain":
      return "lluvia-ligera";
    case "Sleet":
      return "lluvia-nieve";
    case "Light shower sleet":
      return "lluvia-nieve";
    case "Shower sleet":
      return "lluvia-nieve";
    case "fog":
      return "niebla";
    case "Haze":
      return "niebla";
    case "Smoke":
      return "niebla";
    default:
      return "despejado";
  }
}

export default chooseAnimation;
