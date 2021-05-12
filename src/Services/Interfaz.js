function chooseInterfaz(weather, zona) {
  if (zona === "noche") {
    return "oscuro";
  }
  if (zona === "dia") {
    switch (weather) {
      case "despejado":
        return "rojo";
      case "despejado-lluvia":
        return "rojo";
      case "despejado-nieve":
        return "rojo";
      case "despejado-nublado":
        return "rojo";
      case "nublado":
        return "gris";
      case "nieve-fuerte":
        return "gris";
      case "nieve-moderada":
        return "gris";
      case "nieve-ligera":
        return "gris";
      case "viento":
        return "gris";
      case "granizada":
        return "gris";
      case "niebla":
        return "gris";
      case "tormenta-lluvia":
        return "azul";
      case "tormenta-rayos":
        return "azul";
      case "lluvia-fuerte":
        return "azul";
      case "lluvia-moderada":
        return "azul";
      case "lluvia-ligera":
        return "azul";
      case "lluvia-nieve":
        return "azul";
      default:
        return "rojo";
    }
  }
}

export default chooseInterfaz;
