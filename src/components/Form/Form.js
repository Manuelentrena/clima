import React, { useState, useRef } from "react";
import Coutries from "./Countries";
import {
  Formstyled,
  Line,
  Error,
  Button,
  Campo,
  Input,
  Label,
  Select,
} from "./styledForm";

const Form = ({ tipo, guardarBusqueda, busqueda, setHasPeticion }) => {
  /* Seteamos con useRef los inputs */
  const inputCiudad = useRef(null);
  const inputPais = useRef(null);

  /* State del error */
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  /* Al hacer click en el boton */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validar */
    if (
      inputCiudad.current.value.trim() === "" ||
      inputPais.current.value.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
    /* Pasar al componente principal */
    guardarBusqueda({
      ciudad: inputCiudad.current.value,
      pais: inputPais.current.value,
    });
    setHasPeticion(true);
  };

  return (
    <Formstyled>
      <form onSubmit={handleSubmit}>
        {error ? <Error>Todos los campos son obligatorios</Error> : null}
        <Campo>
          <Label htmlFor="ciudad" tipo={tipo}>
            Ciudad
          </Label>
          <Input
            type="text"
            name="ciudad"
            id="ciudad"
            placeholder="Introduce tu ciudad..."
            ref={inputCiudad}
            defaultValue={ciudad}
            tipo={tipo}
          ></Input>
        </Campo>
        <Campo>
          <Label htmlFor="pais" tipo={tipo}>
            País
          </Label>
          <Select
            name="pais"
            id="pais"
            ref={inputPais}
            defaultValue={pais}
            tipo={tipo}
          >
            <Coutries />
          </Select>
        </Campo>

        <Line tipo={tipo} />
        <Button type="submit" value="Buscar Clima" tipo={tipo}>
          BUSCAR
        </Button>
      </form>
    </Formstyled>
  );
};

export default Form;
