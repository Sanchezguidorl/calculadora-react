import React from "react";
import "../styles/Boton.css";
function Boton(props) {
  const esOperador = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={props.children==='='?()=>props.calcular()===false?null:'':()=>props.input(props.ultimoCaracter,props.children)}
      
    >
      {props.children}
    </div>
  );
}
export default Boton;
