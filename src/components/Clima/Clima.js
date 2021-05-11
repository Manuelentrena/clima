import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Climastyled } from "./styledClima";

const Clima = ({ viento, archivo, franja }) => {
  const containerClima = useRef(null);
  useEffect(() => {
    containerClima.current.innerHTML = "";
    const clima = lottie.loadAnimation({
      container: containerClima.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(`../../assests/lotties/${franja}/${archivo}.json`),
    });

    clima.setSpeed(viento);
  });

  return <Climastyled ref={containerClima}></Climastyled>;
};

export default Clima;
