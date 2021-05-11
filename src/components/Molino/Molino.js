import React, { useEffect, useRef } from "react";
import { Molinostyled1, Molinostyled2, Molinostyled3 } from "./styledMolino";
import lottie from "lottie-web";

const Molino = ({ id, viento, tipo }) => {
  const containerMolino = useRef(null);
  useEffect(() => {
    containerMolino.current.innerHTML = "";
    const molino = lottie.loadAnimation({
      container: containerMolino.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(`../../assests/lotties/${tipo}.json`),
    });

    molino.setSpeed(viento);
  });

  return id === "molino1" ? (
    <Molinostyled1 ref={containerMolino} />
  ) : id === "molino2" ? (
    <Molinostyled2 ref={containerMolino} />
  ) : id === "molino3" ? (
    <Molinostyled3 ref={containerMolino} />
  ) : null;
};

export default Molino;
