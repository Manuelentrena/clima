export const Principal = (tipo) => {
  if (tipo === "oscuro") {
    return "rgba(48, 27, 63, 1)";
  } else if (tipo === "gris") {
    return "rgba(27, 47, 62, 1)";
  } else if (tipo === "azul") {
    return "rgba(13, 87, 148, 1)";
  } else {
    return "rgba(208, 51, 51, 1)";
  }
};

export const PrincipalBorder = (tipo) => {
  if (tipo === "oscuro") {
    return "rgba(48, 27, 63, 0.5)";
  } else if (tipo === "gris") {
    return "rgba(27, 47, 62, 0.5)";
  } else if (tipo === "azul") {
    return "rgba(13, 87, 148, 0.5)";
  } else {
    return "rgba(208, 51, 51, 0.5)";
  }
};

export const Secundario = (tipo) => {
  if (tipo === "oscuro") {
    return "rgba(60, 65, 92, 1)";
  } else if (tipo === "gris") {
    return "rgba(107, 133, 138, 1)";
  } else if (tipo === "azul") {
    return "rgba(22, 118, 197, 1)";
  } else {
    return "rgba(225, 156, 93, 1)";
  }
};

export const SecundarioInput = (tipo) => {
  if (tipo === "oscuro") {
    return "rgba(60, 65, 92, 0.5)";
  } else if (tipo === "gris") {
    return "rgba(107, 133, 138, 0.5)";
  } else if (tipo === "azul") {
    return "rgba(22, 118, 197, 0.5)";
  } else {
    return "rgba(225, 156, 93, 0.5)";
  }
};

export const BackgroundInicio = (tipo) => {
  if (tipo === "oscuro") {
    return "rgba(48, 27, 63, 1)";
  } else if (tipo === "gris") {
    return "rgba(107, 133, 138, 1)";
  } else if (tipo === "azul") {
    return "rgba(22, 118, 197, 1)";
  } else {
    return "rgba(208, 51, 51, 1)";
  }
};

export const BackgroundFinal = (tipo) => {
  if (tipo === "oscuro") {
    return "rgba(60, 65, 92, 1)";
  } else if (tipo === "gris") {
    return "rgba(165, 200, 201, 1)";
  } else if (tipo === "azul") {
    return "rgba(135, 213, 246, 1)";
  } else {
    return "rgba(225, 156, 93, 1)";
  }
};
