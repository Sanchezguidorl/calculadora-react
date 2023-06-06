import React from "react";
import '../styles/Boton.css'
function Boton(props) {
  const esOperador = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? 'operador' : ''
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
}
export default Boton;
